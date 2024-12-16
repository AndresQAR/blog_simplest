const users = require('../service/blogs');

console.log('pre try controller');

module.exports.createBlog = async (req, res) => {
    const { title, content, userId} = req.body;  
    try {
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