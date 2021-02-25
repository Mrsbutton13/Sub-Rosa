const express = require('express')
const { Dashboard, Blog, Post, Comment, Follow, User} = require('../../db/models')
const asyncHandler = require('express-async-handler')
const { restoreUser } = require('../../utils/auth')
const router = express.Router()


router.get('/', asyncHandler(async (req, res) => {
    const blog = await Blog.findAll({
        include: Post
    })
    const posts = await Post.findAll({
        include: Comment
    })
    
    return res.json({blog})
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
    res.json({blog})
}))

module.exports = router