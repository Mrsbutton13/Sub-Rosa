const express = require('express')
const asyncHandler = require('express-async-handler')
const {User, Imgpost, Imgcomment, sequelize} = require('../../db/models')
const router = express.Router()
const Op = sequelize.Op
const {singlePublicFileUpload, singleMulterUpload} = require('../../awsS3')

router.get('/', asyncHandler(async(req, res) => {
  const imgPost = await Imgpost.findAll()
  const imgComment = await Imgcomment.findAll()
  const users = await User.findAll()
  return res.json({imgPost, imgComment, users})
}))

router.post('/',
  singleMulterUpload('img'),
  asyncHandler (async(req, res) => {
    const {body, userId} = req.body
    const img = await singlePublicFileUpload(req.file)
    const imgPost = await Imgpost.create({
      img,
      body,
      userId
    })
    res.json({imgPost})
  }))

module.exports = router