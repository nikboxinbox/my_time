import UserModel from '../models/user-model'

class UserService {
  async registration(email, password) {
    const candidate = await UserModel.findOne({ email })

    if (candidate) {
      throw new Error(`Пользователь с почтовым адрессом ${email}, уже существует`)
    }

    const user = await UserModel.create({ email, password })

    // TODO: NODEMAILLER двух-этапную аутентификацию
  }
}

export default UserService
