const express = require('express')
const { Dashboard, Blog, Post, Comment, Follow, User} = require('../../db/models')
const asyncHandler = require('express-async-handler')
const { restoreUser } = require('../../utils/auth')
const router = express.Router()


router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    const blogId = req.params.id

    const blog = await Blog.findByPk(blogId, { include: User})
    
}))