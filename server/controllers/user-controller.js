import userService from '../service/user-service.js'

class UserController {
  async registration(req, res, next) {
    try {
      const { email, password } = req.body
      const userData = await userService.registration(email, password)
      res.cookie('refreshToken', userData.refreshtoken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true
        // If https, flag secure.
      })
      console.log(next)
      return res.json(userData)
    } catch (err) {
      console.error(err)
    }
  }
}

export default new UserController()
