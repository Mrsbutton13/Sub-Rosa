const express = require('express')
const asyncHandler = require('express-async-handler')
const { restoreUser } = require('../../utils/auth')
const {User, Imgpost, Imgcomment, Follow, sequelize} = require('../../db/models')
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
  let imgPost
  if(follow.length > 0) {
    imgPost = await Imgpost.findAll({
        where: Sequelize.or (
       {userId: currentUser.id},
       {userId: following.followId}
     ),
        include: [User]
      })
    } else {
      imgPost = await Imgpost.findAll({
        where: {
          userId: currentUser.id 
        },
        include: [User]
      })
    }
  const imgComment = await Imgcomment.findAll()
  return res.json({imgPost, imgComment, follow})
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

  router.get('/:userId',
  asyncHandler(async(req, res) => {
    const id = req.params.userId
    const imgPost = await Imgpost.findAll({
      where: {
        userId: id
      },
      include:[User]
    })
    return res.json({imgPost})
  }))

module.exports = router