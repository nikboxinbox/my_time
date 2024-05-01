import jwt from 'jsonwebtoken'
import tokenModel from '../models/token-model'

class TockenService {
  generateTokens(payload) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, { expiresIn: '30m' })
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, { expiresIn: '30d' })
    return {
      accessToken,
      refreshToken
    }
  }

  async saveToken(userId, refreshToken) {
    const tokenData = tokenModel.findOne({ user: userId })

    if (tokenData) {
      tokenData.refreshToken = refreshToken
      return tokenData.save()
    }

    const token = tokenModel.create({ user: userId, refreshToken })
    return token
  }

  // TODO: Продумать логику для ситуации когда юзер может заходить периодически с нескольких устройств. Что бы токены в БД не затирались
}

export default new TockenService()
