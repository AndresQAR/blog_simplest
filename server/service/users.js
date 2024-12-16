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
        throw "SYSTEM_ERROR";
      } else {
        return true;
      }
    }
};

module.exports.getUser = async (email, password) => {
  console.log('pre if in service');
  if (!email) {
    throw "EMPTY_EMAIL";
  } else if (!password) {
    throw "EMPTY_PASSWORD";
  } else {
      console.log('else in service')
      const result = await users.getUser(email, password);
      if (!result) {
      throw "SYSTEM_ERROR";
    } else {
      return true;
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