const router = require('express').Router()
const sessionRouter = require('./session.js')
const usersRouter = require('./users.js')
const dashboardRouter = require('./dashboard.js')
const videoPostsRouter = require('./videopost.js')
const textPostRouter = require('./textpost.js')
const imgPostRouter = require('./imgpost.js')
const followRouter = require('./follow.js')

router.use('/follows', followRouter)
router.use('/session', sessionRouter)
router.use('/users', usersRouter)
router.use('/dashboard', dashboardRouter)
router.use('/videoPosts', videoPostsRouter)
router.use('/textPosts', textPostRouter)
router.use('/imgPosts', imgPostRouter)


// router.post('/test', function(req, res) {
//   res.json({ requestBody: req.body });
// });

module.exports = router