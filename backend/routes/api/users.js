const express = require('express')
const {restoreUser} = require('../../utils/auth')
const asyncHandler = require('express-async-handler')
const { setTokenCookie, requireAuth } = require('../../utils/auth')
const { User } = require('../../db/models')
const { check } = require('express-validator')
const { handleValidationErrors } = require('../../utils/validation')
const { singlePublicFileUpload, singleMulterUpload } = require('../../awsS3')
const Sequelize=require('sequelize')
const Op = Sequelize.Op


const router = express.Router()

const validateSignup = [
    check('email')
        .exists({ checkFalsey: true })
        .isEmail()
        .withMessage('Please provide a valid email.'),
    check('username')
        .exists({ checkFalsey: true })
        .isLength({ min: 4 })
        .withMessage('Please provide a username with at least 4 characters'),
    check('username')
        .not()
        .isEmail()
        .withMessage('Username cannot be an email'),
    check('password')
        .exists({ checkFalsey: true })
        .isLength({ min: 6 })
        .withMessage('Password must be 6 characters or more'),
    handleValidationErrors,
]

router.post(
    '/',
    singleMulterUpload('avatar'),
    validateSignup,
    asyncHandler(async(req, res) => {
        const { email, password, bio, username } = req.body
        const avatar = await singlePublicFileUpload(req.file)
        const user = await User.signup({ email, username, password, bio, avatar })
        await setTokenCookie(res, user)

        return res.json({
            user,
        })
    })
)


router.get('/',
    restoreUser,
    asyncHandler(async (req, res) => {
    const user = req.user 
    const users = await User.findAll({
        where: {
            [Op.not]: {
                id: user.id
            }
        },
        limit: 4
    })
    return res.json({ users })   
}))

router.get(
    '/user',
    restoreUser,
    asyncHandler(async(req, res) => {
        const currentUser = req.user 
        const user = await User.findOne({
            where: {
                id: currentUser.id 
            }
        })
        return res.json({user})
    })
)


module.exports = router