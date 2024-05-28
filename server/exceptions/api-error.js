export default class AppiError extends Error {
  status
  errors

  constructor(status, message, errors = []) {
    super(message)
    this.status = status
    this.errors = errors
  }

  static UnauthorizedErrors() {
    return new AppiError(401, 'Пользователь не авторизован')
  }

  static BadRequest(message, errors) {
    return new AppiError(400, message, errors)
  }
}
