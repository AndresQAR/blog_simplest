const users = require('../service/users');

console.log('pre try controller');

module.exports.createUsers = async (req, res) => {
    const { name, email, password } = req.body;  
    try {
        console.log('in try controller')
      const data = await users.createUsers(name , email, password); 
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