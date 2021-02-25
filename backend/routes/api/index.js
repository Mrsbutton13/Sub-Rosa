const router = require('express').Router()
const sessionRouter = require('./session.js')
const usersRouter = require('./users.js')
const dashboardRouter = require('./dashboard.js')
router.use('/session', sessionRouter)

router.use('/users', usersRouter)
router.use('/dashboard', dashboardRouter)
// router.post('/test', function(req, res) {
//   res.json({ requestBody: req.body });
// });

module.exports = router