const express = require('express')
const { Dashboard, Videopost,  User, sequelize} = require('../../db/models')
const asyncHandler = require('express-async-handler')
const { restoreUser } = require('../../utils/auth')
const router = express.Router()
const Op = sequelize.Op
const { singlePublicFileUpload, singleMulterUpload } = require('../../awsS3')

router.get('/', asyncHandler(async (req, res) => {
    const videoPosts = await Videopost.findAll({
        order: [['createdAt', 'DESC']]
    })
    const users = await User.findAll()
    return res.json({videoPosts, users})   
}))

// router.get('/:id(\\d+)', asyncHandler (async (req, res) => {
//     const dashboardId = req.params.id
//     const myDashboard = await Dashboard.findByPk(dashboardId, {
//         include: [User, ]
//     })
//     const userId = myDashboard.userId
//     const username = User.findByPk(userId)
//     return res.json({myDashboard, username, posts})
    
// }))

router.post('/',
    singleMulterUpload('img'),
    asyncHandler (async(req, res) => {
    const { body, userId } = req.body
    const img = await singlePublicFileUpload(req.file)
    const imgPost = await Imgpost.create({
        img,
        body,
        userId,
    })
    res.json({ imgPost })
}))

router.post('/', asyncHandler(async(req, res) => {
    const{ text, userId, textPostId } = req.body
    const textComment = await Textcomment.create({
        text,
        userId,
        textPostId
    })
    res.json({textComment})
}))

// router.get('/', asyncHandler(async(req,res) => {
//     const posts = await Post.findAll()
//     const users = await User.findAll()
//     return res.json({posts, users})
// }))



module.exports = router