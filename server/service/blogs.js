const users = require('../models/blogs');

module.exports.createBlog = async (title, content, userId) => {
    console.log('pre if in service');
    if (!title) {
      throw "EMPTY_TITLE";
    } else if (!content) {
      throw "EMPTY_CONTENT";
    }else if (!userId) {
      throw "EMPTY_USERID";
    } else {
        console.log('else in service')
        const result = await users.createBlog(title, content, userId);
        if (!result) {
        throw "SYSTEM_ERROR";
      } else {
        return true;
      }
    }
  };
module.exports.getBlogs = async () => {
    console.log('pre if in service');
    console.log('else in service')
    const result = await users.getBlogs();
    if (!result) {
    throw "SYSTEM_ERROR";
    } else {
    return result;
    }
};