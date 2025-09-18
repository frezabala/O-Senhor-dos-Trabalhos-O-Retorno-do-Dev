import { Router } from 'express'
import { ItemController } from '../controllers/ItemController' 
import { validateDTO } from '../middlewares/validateDTO'

const router = Router()
const control = new ItemController()

router.get('/',control.get.bind(control))

export default router