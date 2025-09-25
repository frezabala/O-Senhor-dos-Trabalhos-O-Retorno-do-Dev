import { Router } from 'express'
import { SaveController } from '../controllers/SaveController'  
import { validateDTO } from '../middlewares/validateDTO'
import { CreateSaveDTO } from '../dtos/CreateSaveDTO'
import { UpdateSaveDTO } from '../dtos/UpdateSaveDTO'
import { authMiddleware } from '../middlewares/authMiddleware'
import { AddItemDTO } from '../dtos/AddItemDTO'
import { AddCharDTO } from '../dtos/AddCharDTO'

const router = Router()
const control = new SaveController()

router.get('/me', authMiddleware,control.get.bind(control))
router.post('/me', authMiddleware,control.create.bind(control))
router.put('/me', authMiddleware,validateDTO(UpdateSaveDTO),control.update.bind(control))
router.delete('/me', authMiddleware,control.remove.bind(control))
router.patch('/me',authMiddleware,control.saveWon.bind(control))
router.patch('/me/char',authMiddleware, validateDTO(AddCharDTO),control.addChar.bind(control))
router.patch('/me/item',authMiddleware,validateDTO(AddItemDTO),control.addItem.bind(control))

export default router