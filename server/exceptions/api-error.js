export default class AppiError extends Error {
  status;
  errors;

  constructor(status, message, errors=[]){
    super(message);
    this.status;
    this.errors;
  }
}

