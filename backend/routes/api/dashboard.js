const express = require('express')
const { Dashboard, Blog, Post, Comment, Follow, User} = require('../../db/models')
const asyncHandler = require('express-async-handler')
const { restoreUser } = require('../../utils/auth')
const router = express.Router()

router.get('/', asyncHandler(async (req, res) => {
    const dashboards = await Dashboard.findAll({
        userId: res.locals.user.id
    })
    res.json({dashboards})
}))


module.exports = router