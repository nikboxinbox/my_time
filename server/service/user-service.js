import UserModel from '../models/user-model'
import bcrypt from 'bcrypt'
import uuid from 'uuid'
import mailService from './mail-service'
import tokenService from './token-service'
import UserDto from '../dtos/user.dto'
class UserService {
  async registration(email, password) {
    const candidate = await UserModel.findOne({ email })

    if (candidate) {
      throw new Error(`Пользователь с почтовым адрессом ${email}, уже существует`)
    }

    const hashPassword = await bcrypt.hash(password, 3)
    const activationLink = uuid.v4()
    const user = await UserModel.create({ email, hashPassword, activationLink })
    await mailService.sendActivationMail(email, activationLink)
    // TODO: NODEMAILLER двух-этапную аутентификацию

    const userDto = new UserDto(user)
    const tokens = tokenService.generateTokens({ ...userDto })
    await tokenService.saveToken(userDto.id, tokens.refreshToken)

    return { ...tokens, user: userDto }
  }
}

export default UserService
