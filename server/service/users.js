const users = require('../models/users');

module.exports.createUsers = async (name , email, password) => {
    console.log('pre if in service');
    if (!name) {
      throw "EMPTY_NAME";
    } else if (!email) {
      throw "EMPTY_EMAIL";
    } else if (!password) {
      throw "EMPTY_PASSWORD";
    } else {
        console.log('else in service')
        const result = await users.createUser(name, email, password);
        if (!result) {
        throw "SYSTEM_ERROR_MESSI";
      } else {
        return true;
      }
    }
  };