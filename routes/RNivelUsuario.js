var router = require('express').Router()
var CNivelUser = require('../controllers/CNivelUsuario')

router.get('/', CNivelUser.getAllNivelUsuario)
router.get('/id/:id', CNivelUser.getNivelUserById)
router.post('/create', CNivelUser.createNivelUser)
router.put('/:id', CNivelUser.updateNivelUser)

module.exports = router