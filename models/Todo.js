const mongoose = require('mongoose');
//Define a schema
const Schema = mongoose.Schema;
const TodoSchema = new Schema({
  // _id: {
  //    type: Schema.Types.ObjectId, ref: 'vehicleGroup'
  // },
  todo_name: {
    type: String,
    required: true,
  },
  todo_title: {
    type: String,
    required: true,
  },
  todo_desc: {
    type: String,
    required: true,
  },
  todo_state: {
    type: String,
    required: true,
    maxlength: 1
  },
  user_id:{
    type:Schema.Types.ObjectId,
    required:true
  }
});
// hash user password before saving into database
// UserSchema.pre('save', function(next){
// this.password = bcrypt.hashSync(this.password, saltRounds);
// next();
// });
module.exports = mongoose.model('Todos', TodoSchema);
//call it like this
//const userModel = require('../models/users');
//userModel.create({ name: req.body.name, email: req.body.email, password: req.body.password }, function (err, result) {
//   if (err) 
//   next(err);
//  else
//   res.json({status: "success", message: "User added successfully!!!", data: null});
 
// });
