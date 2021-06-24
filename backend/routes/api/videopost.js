const express = require('express')
const asyncHandler = require('express-async-handler')
const {restoreUser} = require('../../utils/auth')
const {User, Videopost, Videocomment, Follow, sequelize} = require('../../db/models')
const router = express.Router()
const Sequelize = require('sequelize')
const {singlePublicFileUpload, singleMulterUpload} = require('../../awsS3')

router.get('/', 
restoreUser,
asyncHandler(async(req, res) => {
  const currentUser = req.user 
  const follow = await Follow.findAll({
    where: {
      userId : currentUser.id
    }
  })
  let following
  follow.forEach(person => {
    following = person
  })
  let videoPost
  if(follow.length > 0) {
    videoPost = await Videopost.findAll({
     where: Sequelize.or (
       {userId: currentUser.id},
       {userId: following.followId}
     ),
      include:[User]
      })
    } else {
      videoPost = await Videopost.findAll({
        where: {
          userId: currentUser.id 
        },
        include:[User]
      })
    }
  const videoComment = await Videocomment.findAll()
  return res.json({videoPost, videoComment, follow})
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

  router.get('/:userId',
  asyncHandler(async(req, res) => {
    const id = req.params.userId
    const videoPost = await Videopost.findAll({
      where: {
        userId: id
      },
      include: [User]
    })
    return res.json({videoPost})
  }))
module.exports = router