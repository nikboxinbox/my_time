import UserModel from '../models/user-model.js'
import bcrypt from 'bcrypt'
import { v4 } from 'uuid'
import mailService from './mail-service.js'
import tokenService from './token-service.js'
import UserDto from '../dtos/user.dto.js'
class UserService {
  async registration(email, password) {
    const candidate = await UserModel.findOne({ email })

    if (candidate) {
      throw new Error(`Пользователь с почтовым адрессом ${email}, уже существует`)
    }

    const hashPassword = await bcrypt.hash(password, 3)
    const activationLink = v4()
    const user = await UserModel.create({ email, password: hashPassword, activationLink })
    await mailService.sendActivationMail(email, activationLink)
    // TODO: NODEMAILLER двух-этапную аутентификацию

    const userDto = new UserDto(user)
    const tokens = tokenService.generateTokens({ ...userDto })
    await tokenService.saveToken(userDto.id, tokens.refreshToken)

    return { ...tokens, user: userDto }
  }
}

export default new UserService()
