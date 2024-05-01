import Router from 'express'
import userController from '../controllers/user-controller.js'

const router = new Router()

router.post('/registration', userController.registration)
router.post('/login')
router.post('/logout')
router.post('/activate/:link')
router.post('/refresh')
router.post('/users')

export default router
