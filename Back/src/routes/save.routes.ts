import { Router } from 'express'
import { SaveController } from '../controllers/SaveController'  
import { validateDTO } from '../middlewares/validateDTO'
import { CreateSaveDTO } from '../dtos/CreateSaveDTO'
import { UpdateSaveDTO } from '../dtos/UpdateSaveDTO'
import { authMiddleware } from '../middlewares/authMiddleware'

const router = Router()
const control = new SaveController()

router.get('/me', authMiddleware,control.get.bind(control))
router.get('/me/all', authMiddleware,control.list.bind(control))
router.post('/me', authMiddleware,validateDTO(CreateSaveDTO),control.create.bind(control))
router.put('/me', authMiddleware,validateDTO(UpdateSaveDTO),control.update.bind(control))
router.delete('/me', authMiddleware,control.remove.bind(control))

export default router