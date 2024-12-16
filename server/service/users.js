const users = require('../models/users');

module.exports.getUserById = async (userId) => {
  console.log('pre if in service');
  if (!userId) {
    throw "EMPTY_USERID";
  } else {
      console.log('else in service')
      const result = await users.getUserById(userId);
      if (!result) {
      throw "SYSTEM_ERROR";
    } else {
      return result;
    }
  }
};

module.exports.updateUser = async (name , email, password, userId) => {
  console.log('pre if in service');
  if (!name) {
    throw "EMPTY_NAME";
  } else if (!email) {
    throw "EMPTY_EMAIL";
  } else if (!password) {
    throw "EMPTY_PASSWORD";
  } else if (!userId) {
    throw "EMPTY_ID";
  } else {
      console.log('else in service')
      const result = await users.updateUser(name, email, password, userId);
      if (!result) {
      throw "SYSTEM_ERROR";
    } else {
      return true;
    }
  }
};