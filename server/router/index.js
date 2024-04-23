import Router from 'express'

const router = new Router()

router.post('/registration')
router.post('/login')
router.post('/logout')
router.post('/activate/:link')
router.post('/refresh')
router.post('/users')

export default router
