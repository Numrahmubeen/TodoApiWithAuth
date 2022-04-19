const path = require('path');
const User = require(path.join(__dirname, '../../models/User')); 

const {
  isValidEmail,
  validatePassword,
  isEmpty,
  generateUserToken,
} = require(path.join(__dirname, '../../helpers/validation'));

const {
  errorMessage, successMessage, status,
} = require(path.join(__dirname, '../../helpers/status'));

const login = (req, res) => {
  const { email, password } = req.body;
  if (isEmpty(email) || isEmpty(password)) {
    errorMessage.error = 'Email or Password detail is missing';
    return res.status(status.bad).send(errorMessage);
  }
  if (!isValidEmail(email) || !validatePassword(password)) {
    errorMessage.error = 'Please enter a valid Email or Password';
    return res.status(status.bad).send(errorMessage);
  }
  User.findOne({
    email: email
    
}).then(user => {
  if(!user){
    errorMessage.error = 'User with this email does not exist';
    return res.status(status.notfound).send(errorMessage);
  }
  if (!Object.is(user.password, password)) {
    errorMessage.error = 'The password you provided is incorrect '+ user.password +" : "+password;
    return res.status(status.bad).send(errorMessage);
  }
  const token = generateUserToken(user.email, user.id, false, user.name);
  user.delete("password");
  successMessage.data = user;
  successMessage.token = token;
  return res.status(status.success).send(successMessage);
}).catch(e=>{

      console.error(e);
      errorMessage.error = 'Operation was not successful';
      return res.status(status.error).send(errorMessage);
})};

module.exports = login;
// "email": "test@gmail.com",
//         "password": "test123"