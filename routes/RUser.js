import { Router } from 'express'
import { validateCreate,validateUpdate, validateParams } from '../utils/validateUser.js'
import { createUser, updateUser, getAllUsers, getUserById, DeletUserById } from '../controllers/CUser.js'
const router = Router()

router.get('/getAll', getAllUsers)
router.get('/getUser/:id',validateParams,getUserById)
router.post('/create',validateCreate,createUser)
router.put('/update/:id/',validateParams,validateUpdate ,updateUser)
router.delete('/delete/:id',validateParams,DeletUserById)

export default router