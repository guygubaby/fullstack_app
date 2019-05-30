module.exports = class Result {
  static ok(
    data = {},
    msg = 'ok',
    code = 0
  ) {
    return {
      msg,
      code,
      data
    }
  }
  static error(err, data = {}) {
    return {
      code: -1,
      msg: err,
      data
    }
  }
}