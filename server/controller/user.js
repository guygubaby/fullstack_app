const Base = require('./base')
const userProxy = require('../proxy/user')
// const redis = require('../db/redis')

class User extends Base {
  constructor() {
    super()
  }

  async register(params) {
    const {
      email,
      nick,
      pwd
    } = params

    try {
      if (!email || !/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/.test(email)) {
        throw new Error('邮箱格式不正确');
      } else if (!pwd || !/(?!^(\d+|[a-zA-Z]+|[~!@#$%^&*?]+)$)^[\w~!@#$%^&*?].{6,18}/.test(pwd)) {
        throw new Error('密码必须为数字、字母和特殊字符其中两种组成并且在6至18位之间');
      } else if (!nick || nick.length > 18 || nick.length < 2) {
        throw new Error('昵称必须在2至18位之间');
      }
    } catch (err) {
      // ctx.throw(400, err.message);
      return Promise.reject(new Error(err))
    }
    let exsitUser;
    exsitUser = await userProxy.getOne({
      email
    })
    if (exsitUser) {
      return Promise.reject(new Error('邮箱已经注册过了'))
    }
    exsitUser = await userProxy.getOne({
      nick
    })
    if (exsitUser) {
      return Promise.reject(new Error('用户名已存在'))
    }
    await userProxy.create({
      email,
      nick,
      pwd
    })
  }

  login({
    nick,
    pwd
  }) {
    return new Promise(async (resolve, reject) => {
      const user = await userProxy.getOne({
        nick
      });
      if (!user) {
        reject(new Error('尚未注册'))
      }
      if (user.pwd === pwd) {
        resolve(user)
      }
      reject(new Error('密码错误'))
    })
  }

  getAll() {
    return Promise.resolve(userProxy.getAll())
  }

  async del({
    nick,
    email,
    pwd
  }) {
    await userProxy.del({
      nick,
      email,
      pwd
    })
  }
}

module.exports = new User()