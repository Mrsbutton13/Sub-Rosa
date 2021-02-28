const express = require('express')
const { Dashboard, Post,  User, Comment, sequelize} = require('../../db/models')
const asyncHandler = require('express-async-handler')
const { restoreUser } = require('../../utils/auth')
const router = express.Router()
const Op = sequelize.Op

router.get('/', asyncHandler(async (req, res) => {
    const dashboards = await Dashboard.findAll()
    const posts = await Post.findAll({
        order: [['createdAt', 'DESC']]
    })
    const users = await User.findAll()
    const comments = await Comment.findAll({
        order: [['createdAt', 'DESC']]
    })
    return res.json({dashboards, posts, users, comments})   
}))

router.get('/:id(\\d+)', asyncHandler (async (req, res) => {
    const dashboardId = req.params.id
    const myDashboard = await Dashboard.findByPk(dashboardId, {
        include: [User, ]
    })
    const userId = myDashboard.userId
    const username = User.findByPk(userId)
    return res.json({myDashboard, username, posts})
    
}))

router.post('/', asyncHandler (async(req, res) => {
    const { body, userId } = req.body
    const post = await Post.create({
        body,
        userId,
     
    })
    res.json({ post })
}))

router.post('/', asyncHandler(async(req, res) => {
    const{ text, userId, postId } = req.body
    const comment = await Comment.create({
        text,
        userId,
        postId
    })
    res.json({comment})
}))

// router.get('/', asyncHandler(async(req,res) => {
//     const posts = await Post.findAll()
//     const users = await User.findAll()
//     return res.json({posts, users})
// }))



module.exports = router