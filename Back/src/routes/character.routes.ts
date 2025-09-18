import { Router } from 'express'
import { CharacterController } from '../controllers/CharacterController' 
import { validateDTO } from '../middlewares/validateDTO'

const router = Router()
const control = new CharacterController()

router.get('/',control.get.bind(control))

export default router