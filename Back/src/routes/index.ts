import { Router } from 'express'
import authRoutes from './auth.routes'
import userRoutes from './user.routes'
import characterRoutes from './character.routes'
import saveRoutes from './save.routes'
import effectRoutes from './effect.routes'
import itemRoutes from './item.routes'

const router = Router()

router.use('/auth', authRoutes)
router.use('/users', userRoutes)
router.use('/saves', saveRoutes)
router.use('/chars', characterRoutes)
router.use('/effects', effectRoutes)
router.use('/items', itemRoutes)

export default router