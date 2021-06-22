const express = require('express')
const asyncHandler = require('express-async-handler')
const {User, Textpost, Textcomment, sequelize} = require('../../db/models')
const router = express.Router()
const Op = sequelize.Op

router.get('/', asyncHandler(async(req, res) => {
  const textPost = await Textpost.findAll()
  const textComment = await Textcomment.findAll()
  const users = await User.findAll()
  return res.json({textPost, textComment, users})
}))

router.post('/',
  asyncHandler (async(req, res) => {
    const {body, userId} = req.body
    const textPost = await Textpost.create({
      body,
      userId
    })
    return res.json({textPost})
  }))

module.exports = router