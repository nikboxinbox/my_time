import jwt from 'jsonwebtoken'
import tokenModel from '../models/token-model.js'

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
    const tokenData = await tokenModel.findOne({ user: userId })

    if (tokenData) {
      tokenData.refreshToken = refreshToken
      return tokenData.save()
      // FIXME: save is depricated and use replaceOne()
    }

    const token = await tokenModel.create({ user: userId, refreshToken })
    return token
  }

  // TODO: Продумать логику для ситуации когда юзер может заходить периодически с нескольких устройств. Что бы токены в БД не затирались
}

export default new TockenService()
