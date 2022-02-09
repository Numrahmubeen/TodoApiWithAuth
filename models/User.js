const { UniqueArgumentDefinitionNamesRule } = require('graphql');
const mongoose = require('mongoose');
//Define a schema
const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique:true
  },
  password: {
    type: String,
    required: true,
  }
});
// hash user password before saving into database
// UserSchema.pre('save', function(next){
// this.password = bcrypt.hashSync(this.password, saltRounds);
// next();
// });

const User = mongoose.model('Users', UserSchema);

module.exports.createUser = function (name,email,password) {

  const myNewUser =new User({  name:name,email:email,password:password});
  myNewUser.save();
  return myNewUser;
}

module.exports.findById = function(id){
  const user = User.findOne({
     _id: id
     })
     return user;
}


module.exports.findOne = function(email){
   const user = User.findOne({
      email: email
      })
      return user;
}

module.exports.find = function(){
  const users = User.find()
  return users;
}


