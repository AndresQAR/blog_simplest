const users = require('../service/users');
const jwt = require('jsonwebtoken');

console.log('pre try controller');

module.exports.getUserById = async (req, res) => { 
    const token = req.headers['authorization']?.split(' ')[1];

    if (!token) {
      return res.status(401).send({ success: false, message: 'No token provided' });
    }

    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const userId = decoded.userId;
      console.log('in try controller')
      const data = await users.getUserById(userId); 
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

module.exports.updateUser = async (req, res) => {
  const { name, email, password, userId } = req.body;  
  try {
      console.log('in try controller')
    const data = await users.updateUser(name , email, password, userId); 
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