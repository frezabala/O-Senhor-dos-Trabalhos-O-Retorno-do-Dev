import { Router } from 'express'
import { EffectController } from '../controllers/EffectController' 
import { validateDTO } from '../middlewares/validateDTO'

const router = Router()
const control = new EffectController()

router.get('/',control.get.bind(control))

export default router