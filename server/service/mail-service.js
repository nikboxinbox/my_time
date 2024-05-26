import nodemailer from 'nodemailer'

class MailService {
  async sendActivationMail(to, link) {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false, // Use `true` for port 465, `false` for all other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
      }
    })
    try {
      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to,
        subject: 'Активация аккунта' + process.env.API_URL,
        text: '',
        html: `<div>
          <h1>Для активации пройдите по ссылке</h1>
          <a href="${link}">Ссылка для активации</a>
        </div>
        `
      })
      console.log('ПИСЬМО ОТПРАВЛЕНО', to)
    } catch (error) {
      console.error('ПИСЬМО НЕ ОТПРАВЛЕНО', to, error)
    }
  }
}

export default new MailService()
