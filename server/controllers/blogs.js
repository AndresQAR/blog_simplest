const users = require('../service/blogs');
const jwt = require('jsonwebtoken');

console.log('pre try controller');

module.exports.createBlog = async (req, res) => {
    const { title, content} = req.body; 
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
      return res.status(401).send({ success: false, message: 'No token provided' });
    }
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const userId = decoded.userId;
      console.log('in try controller')
      const data = await users.createBlog( title, content, userId); 
      res.send({
        success: true,
        data: data,
      });
    } catch (error) {
        console.log('en catch controller');
      res.send({
        success: false,
        message: error,
      });
    }
  };

module.exports.getBlogs = async (req, res) => { 
    try {
        console.log('in try controller')
      const data = await users.getBlogs(); 
      res.send({
        success: true,
        data: data,
      });
    } catch (error) {
        console.log('en catch controller');
      res.send({
        success: false,
        message: error,
      });
    }
  };