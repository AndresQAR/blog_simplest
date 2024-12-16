const auth = require('../models/auth');

module.exports.logUser = async (email, password) => {
    console.log('pre if in service');
    if (!email) {
      throw "EMPTY_EMAIL";
    } else if (!password) {
      throw "EMPTY_PASSWORD";
    } else {
        console.log('else in service')
        const result = await auth.logUser(email, password);
        if (!result) {
        throw "SYSTEM_ERROR";
      } else {
        return result;
      }
    }
};

module.exports.createUser = async (name , email, password) => {
    console.log('pre if in service');
    if (!name) {
      throw "EMPTY_NAME";
    } else if (!email) {
      throw "EMPTY_EMAIL";
    } else if (!password) {
      throw "EMPTY_PASSWORD";
    } else {
        console.log('else in service')
        const result = await auth.createUser(name, email, password);
        if (!result) {
        throw "SYSTEM_ERROR";
      } else {
        return true;
      }
    }
};