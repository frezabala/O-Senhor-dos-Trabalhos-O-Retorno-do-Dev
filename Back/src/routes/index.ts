import { Router } from 'express'
import authRoutes from './auth.routes'
import userRoutes from './user.routes'
import characterRoutes from './character.routes'
import saveRoutes from './save.routes'

const router = Router()

router.use('/auth', authRoutes)
router.use('/users', userRoutes)
router.use('/saves', saveRoutes)
router.use('/chars', characterRoutes)

export default router