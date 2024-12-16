const auth = require('../service/auth');
const jwt = require('jsonwebtoken');

module.exports.logUser = async (req, res) => {
    const {email, password } = req.body;  
    try {
        console.log('in try controller')
        const data = await auth.logUser(email, password); 
        const token = jwt.sign(
          { userId: data[0].userId }, 
          process.env.JWT_SECRET, 
          { expiresIn: '1h' } 
        );

      res.send({
        success: true,
        data: data,
        token: token,
      });
    } catch (error) {
        console.log('en catch controller');
      res.send({
        success: false,
        message: error,
      });
    }
};

module.exports.createUser = async (req, res) => {
    const { name, email, password } = req.body;  
    try {
        console.log('in try controller')
      const data = await auth.createUser(name , email, password); 
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