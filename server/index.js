import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import mongoose from 'mongoose'

import router from './router/index.js'

const PORT = process.env.PORT || 5000
const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use('/api', router)

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL)

    app.listen(PORT, () => console.log(`Server started on Port = ${PORT}`))
  } catch (error) {
    console.log(error)
  }
}

start()
