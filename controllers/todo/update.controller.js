const path = require('path')
const Todo = require(path.join(__dirname, '../../models/Todo')); 

const updateTodo =(req,res)=>{

    let state = req.body.state;

      Todo.findOneAndUpdate({
        _id: req.params.todo_id,
      } , {todo_state: state})
      .then((todo)=>{
        res.send("Todo state updated successfully "+req.params.todo_id)
      }).catch( (err)=> {
        console.log(err)
          res.send(err)
      })
  }
module.exports = updateTodo;