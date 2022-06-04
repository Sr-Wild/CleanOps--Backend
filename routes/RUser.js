import { Router } from 'express'
import { createUser, updateUser, getAllUsers, getUserById } from '../controllers/CUser.js'
const router = Router()

router.get('/', getAllUsers)
router.get('/id/:id', getUserById)
router.post('/create', createUser)
router.put('/update/:id', updateUser)

export default router