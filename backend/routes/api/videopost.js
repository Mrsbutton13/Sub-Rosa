const express = require('express')
const asyncHandler = require('express-async-handler')
const {User, Videopost, Videocomment, sequelize} = require('../../db/models')
const router = express.Router()
const Op = sequelize.Op
const {singlePublicFileUpload, singleMulterUpload} = require('../../awsS3')

router.get('/', asyncHandler(async(req, res) => {
  const videoPost = await Videopost.findAll()
  const videoComment = await Videocomment.findAll()
  const users = await User.findAll()
  return res.json({videoPost, videoComment, users})
}))

router.post('/',
  singleMulterUpload('video'),
  asyncHandler (async(req, res) => {
    const {body, userId} = req.body
    const video = await singlePublicFileUpload(req.file)
    const videoPost = await Videopost.create({
      video,
      body,
      userId
    })
    res.json({videoPost})
  }))

module.exports = router