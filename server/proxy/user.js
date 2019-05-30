const UserModel = require('../models/user')

module.exports = class User {
  static create(user) {
    return UserModel.create(user)
  }
  /**
   * 根据条件查找用户一个
   *
   * @static
   * @param {Object} query
   * @param {Object|String} select
   * @param {Object} options
   * @returns
   */
  static getOne(query, select, options) {
    return UserModel.findOne(query, select, options);
  }

  /**
   * 根据条件查找用户
   *
   * @static
   * @param {Object} query
   * @param {String} select
   * @param {Object} options
   * @returns
   */
  static get(query, select, options) {
    return UserModel.find(query, select, options);
  }

  static async getAll() {
    return {
      users: await UserModel.find(),
      count: await UserModel.estimatedDocumentCount()
    }
  }

  static del(query) {
    return UserModel.deleteOne(query)
  }

}