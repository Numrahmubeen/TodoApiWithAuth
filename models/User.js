const mongoose = require('mongoose');
const Todos = mongoose.model('Todos');
//Define a schema
const Schema = mongoose.Schema;
const UserSchema = new Schema({
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
  },
  Todos: [Todos.schema]
});
// hash user password before saving into database
// UserSchema.pre('save', function(next){
// this.password = bcrypt.hashSync(this.password, saltRounds);
// next();
// });
module.exports = mongoose.model('Users', UserSchema);
