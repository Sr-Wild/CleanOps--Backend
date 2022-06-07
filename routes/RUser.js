import { Router } from 'express'
import { validateCreate,validateUpdate, validateParams } from '../utils/validateUser.js'
import { createUser, updateUser, getAllUsers, getUserById } from '../controllers/CUser.js'
const router = Router()

router.get('/getAll', getAllUsers)
// router.get('/params/:id',validateByid,getUserById)
router.get('/params/:id/:cedula/:correo/:telefono',validateParams,getUserById)
router.post('/create',validateCreate,createUser)
// router.put('/update/:id',validateByid,validateUpdate ,updateUser)
router.put('/update/:id/:cedula/:correo/:telefono',validateParams,validateUpdate ,updateUser)

export default router