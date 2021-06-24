const express = require('express')
const asyncHandler = require('express-async-handler')
const {User, Follow, Textpost, Textcomment, Imgpost, Imgcomment, Videopost, Videocomment} = require('../../db/models')
const {restoreUser} = require('../../utils/auth')
const router = express.Router()

router.get('/', 
restoreUser,
asyncHandler(async(req, res) => {
  const currentUser = req.user 
  const follow = await Follow.findAll({
    where: {
      userId : currentUser.id
    }
  })
  return res.json({ follow })
}))

router.post('/',
  restoreUser,
  asyncHandler(async(req, res) => {
    // const currentUser = req.user
    const { followId, userId} = req.body 
      const follow = await Follow.create({
        userId,
        followId
      })
      return res.json({ follow })
    
  }))

  module.exports = router