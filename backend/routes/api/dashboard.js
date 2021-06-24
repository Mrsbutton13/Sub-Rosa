const express = require('express')
const { Dashboard, Videopost,  User, sequelize} = require('../../db/models')
const asyncHandler = require('express-async-handler')
const { restoreUser } = require('../../utils/auth')
const router = express.Router()
const Op = sequelize.Op
const { singlePublicFileUpload, singleMulterUpload } = require('../../awsS3')

router.get('/', asyncHandler(async (req, res) => {
    const users = await User.findAll()
    return res.json({ users })   
}))


module.exports = router