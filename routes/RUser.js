import { Router } from 'express'
import { validateCreate,validateUpdate} from '../utils/validateUser.js'
import { createUser, updateUser, getAllUsers, getUserById } from '../controllers/CUser.js'
const router = Router()

router.get('/', getAllUsers)
router.get('/id/:id',getUserById)
router.post('/create',validateCreate,createUser)
router.put('/update/:id',validateUpdate ,updateUser)

export default router