// const moment = require('moment');
const path = require('path')

const {
  isValidEmail,
  validatePassword,
  isEmpty,
  generateUserToken,
} = require(path.join(__dirname, '../../helpers/validation'));

const {
  errorMessage, successMessage, status,
} = require(path.join(__dirname, '../../helpers/status'));
const User = require(path.join(__dirname, '../../models/User'));

const signup =  async (req, res) => {
    const {
      email, name, password,
    } = req.body;
  
    if (isEmpty(email) || isEmpty(name) || isEmpty(password)) {
      errorMessage.error = 'Email, password and name field cannot be empty';
      return res.status(status.bad).send(errorMessage);
    }
    if (!isValidEmail(email)) {
      errorMessage.error = 'Please enter a valid Email';
      return res.status(status.bad).send(errorMessage);
    }
    if (!validatePassword(password)) {
      errorMessage.error = 'Password must be more than five(5) characters';
      return res.status(status.bad).send(errorMessage);
    }
  
    try {
      User.create({
        name: name, 
        email: email,
        password: password
      }
        )
        .then((response,err)=>{
          if(!err){
           const token = generateUserToken(response.email, response.id,false, response.name);
            delete response.password;
            successMessage.data = response;
            successMessage.data.token = token;
            return res.status(status.created).send(successMessage);
              //res.send('User Sucessfully created')
          }
          else{ 
            if (err === '_bt_check_unique') {
              errorMessage.error = 'User with that EMAIL already exist';
              return res.status(status.conflict).send(errorMessage);
            }
            errorMessage.error = 'Operation was not successful';
            return res.status(status.error).send(errorMessage);
          
            // res.send(err)
            // console.log(err.message) 
          }
        })
        .catch((error)=> {
         // res.send(error)
          if (error.code == 11000) {   //11000 E11000 duplicate key error check
            errorMessage.error = 'User with that EMAIL already exist';
            return res.status(status.conflict).send(errorMessage);
          }
          errorMessage.error = 'Operation was not successful';
          return res.status(status.error).send(errorMessage);
        }
      // const { rows } = await dbQuery.query(createUserQuery, values);
      // const dbResponse = rows[0];
      // delete dbResponse.password;
        )
    } catch (error) {
      res.send(error)
      if (error.routine === '_bt_check_unique') {
        errorMessage.error = 'User with that EMAIL already exist';
        return res.status(status.conflict).send(errorMessage);
      }
      errorMessage.error = 'Operation was not successful';
      return res.status(status.error).send(errorMessage);
    }
  };

module.exports = signup;