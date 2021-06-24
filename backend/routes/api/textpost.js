const express = require('express')
const asyncHandler = require('express-async-handler')
const {restoreUser} = require('../../utils/auth')
const {User, Textpost, Textcomment, Follow, sequelize} = require('../../db/models')
const router = express.Router()
const Sequelize = require('sequelize')

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
  let textPost
  if(follow.length > 0) {
    textPost = await Textpost.findAll({
        where: Sequelize.or (
       {userId: currentUser.id},
       {userId: following.followId}
     ),
        include: [User]
      })
    } else {
      textPost = await Textpost.findAll({
        where: {
          userId: currentUser.id 
        },
        include: [User]
      })
    }
  const textComment = await Textcomment.findAll()
  return res.json({textPost, textComment, follow})
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

  router.get('/:userId',
  asyncHandler(async(req, res) => {
    const id = req.params.userId
    const textPost = await Textpost.findAll({
      where: {
        userId: id
      },
      include: [User]
    })
    return res.json({textPost})
  }))

module.exports = router