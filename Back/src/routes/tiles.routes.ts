import { Router } from 'express'
import { TileController } from '../controllers/TileController'

const router = Router()
const control = new TileController

router.get('/',control.get.bind(control))
router.get('/all',control.list.bind(control))

export default router