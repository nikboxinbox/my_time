import UserModel from '../models/user-model'
import bcrypt from 'bcrypt'

class UserService {
  async registration(email, password) {
    const candidate = await UserModel.findOne({ email })

    if (candidate) {
      throw new Error(`Пользователь с почтовым адрессом ${email}, уже существует`)
    }

    const hashPassword = await bcrypt.hash(password, 3)

    const user = await UserModel.create({ email, hashPassword })

    // TODO: NODEMAILLER двух-этапную аутентификацию
  }
}

export default UserService
