const express = require('express')
const { Dashboard, Blog, Post, Comment, Follow, User, Sequelize} = require('../../db/models')
const asyncHandler = require('express-async-handler')
const { restoreUser } = require('../../utils/auth')
const router = express.Router()


router.get('/', asyncHandler(async (req, res) => {
    const blogs = await Blog.findAll()
    return res.json({blogs})
}))

router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    const blogId = req.params.id
    const blog = await Blog.findByPk(blogId, {include: [ User, Dashboard, Post ]})
    console.log(blog, 'this is the blog')
    const userId = blog.userId
    const user = await User.findByPk(userId)
    const username = user.username
    console.log(username, 'this is the user')
    return res.json({blog, username})
}))

router.post('/:id(\\d+)', asyncHandler(async (req, res) => {
    const blogId = req.params.id
    const blog = await Blog.findByPk(blogId, { include: [User, Dashboard, Post] })
    await blog.save({ 
        title: blog.title,
        description: blog.description,
        profileImage: blog.profileImage,
        backgroundImage: blog.backgroundImage
    })
   return res.json({blog})
}))


module.exports = router