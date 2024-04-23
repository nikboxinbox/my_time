import { Schema, model } from 'mongoose'

const TokenSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  refreshTocken: { type: String, required: true }
})

const Token = model('Token', TokenSchema)

export default Token
