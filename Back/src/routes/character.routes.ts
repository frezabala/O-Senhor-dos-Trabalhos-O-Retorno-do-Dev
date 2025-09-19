import { Router } from 'express'
import { CharacterController } from '../controllers/CharacterController' 
import { validateDTO } from '../middlewares/validateDTO'
import { calculateDamageDTO } from '../dtos/CalculateDamageDTO'

const router = Router()
const control = new CharacterController()

router.get('/',control.get.bind(control))
router.post('/dam',validateDTO(calculateDamageDTO),control.calculateDamage.bind(control))

export default router