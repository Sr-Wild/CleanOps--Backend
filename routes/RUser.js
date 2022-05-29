var router = require('express').Router()
var cUser = require('../controllers/CUser')

router.get('/', cUser.getAllUsers)
router.get('/id/:id', cUser.getUserById)
router.post('/create', cUser.createUser)
router.put('/:id', cUser.updateUser)

module.exports = router
