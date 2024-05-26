import userService from '../service/user-service.js'

class UserController {
  async registration(req, res /*next*/) {
    try {
      const { email, password } = req.body
      const userData = await userService.registration(email, password)
      res.cookie('refreshToken', userData.refreshtoken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true
        // If https, flag secure.
      })
      return res.json(userData)
    } catch (err) {
      console.error(err)
    }
  }

  async activate(req, res, next) {
    try {
      const activationLink = req.params.link
      await userService.activate(activationLink)
      return res.redirect(process.env.CLIENT_URL)
    } catch (error) {
      console.error(error)
    }
  }
}

export default new UserController()
