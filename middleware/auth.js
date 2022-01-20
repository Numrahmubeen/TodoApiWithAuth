const jwt= require('jsonwebtoken');
const dotenv = ('dotenv');
const path = require('path')
const env = require(path.join(__dirname, '../env'));

const {
  errorMessage, status,
} = require('../helpers/status');

// import env from '../../env';

dotenv.config;

const verifyToken = async (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    errorMessage.error = 'Token not provided';
    return res.status(status.bad).send(errorMessage);
  }
  try {
    const decoded =  jwt.verify(token, env);
    req.user = {
      email: decoded.email,
      user_id: decoded.user_id,
      is_admin: decoded.is_admin,
      name: decoded.name,
    };
    next();
  } catch (error) {
    errorMessage.error = 'Authentication Failed';
    console.log(error);
    return res.status(status.unauthorized).send(errorMessage);
  }
};

module.exports = verifyToken;