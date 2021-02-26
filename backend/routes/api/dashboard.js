const express = require('express')
const { Dashboard, Blog, Post, Comment, Follow, User, sequelize} = require('../../db/models')
const asyncHandler = require('express-async-handler')
const { restoreUser } = require('../../utils/auth')
const router = express.Router()
const Op = sequelize.Op

router.get('/', asyncHandler(async (req, res) => {
    const dashboards = await Dashboard.findAll()
     const posts = await Post.findAll()
    return res.json({dashboards, posts})   
}))

router.get('/:id(\\d+)', asyncHandler (async (req, res) => {
    const dashboardId = req.params.id
    console.log(dashboardId, 'this is the id')
    const myDashboard = await Dashboard.findByPk(dashboardId, {
        include: [User, Blog, Post]
    })
    const posts = await Post.findAll({
        where: {
            dashboardId: {
                [Op.eq] : dashboardId
            }
        }
    })
    const userId = myDashboard.userId
    const username = User.findByPk(userId)
    return res.json({myDashboard, username, posts})
    
}))





module.exports = router