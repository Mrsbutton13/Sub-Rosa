const router = require('express').Router()
const sessionRouter = require('./session.js')
const usersRouter = require('./users.js')
const dashboardRouter = require('./dashboard.js')
const blogRouter = require('./blog.js')
router.use('/session', sessionRouter)

router.use('/users', usersRouter)
router.use('/dashboard', dashboardRouter)
router.use('/blog', blogRouter)
// router.post('/test', function(req, res) {
//   res.json({ requestBody: req.body });
// });

module.exports = router