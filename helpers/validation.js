const jwt = require('jsonwebtoken')
const path = require('path')

const env = require(path.join(__dirname, '../env'));
require('dotenv').config 
const isValidEmail = (email) => {
    const regEx = /\S+@\S+\.\S+/;
    return regEx.test(email);
  };
  
  const validatePassword = (password) => {
    if (password.length <= 5 || password === '') {
      return false;
    } return true;
  };

  const isEmpty = (input) => {
    if (input === undefined || input === '') {
      return true;
    }
    if (input.replace(/\s/g, '').length) {
      return false;
    } return true;
  };
  
  const empty = (input) => {
    if (input === undefined || input === '') {
      return true;
    }
  };

  const generateUserToken = (email,id,is_admin,name)=>{
      const token = jwt.sign({
          email,
          user_id: id,
          is_admin,
          name,
        },
        env
        ,{expiresIn: "2d"});
        return token;
  };
  
  module.exports= {
    isValidEmail,
    validatePassword,
    isEmpty,
    empty,
    generateUserToken,
  };