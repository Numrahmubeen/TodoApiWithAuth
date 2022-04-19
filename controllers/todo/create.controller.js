// const path = require('path')
const path = require('path');
const User = require(path.join(__dirname, '../../models/User')); 
const Todo = require(path.join(__dirname, '../../models/Todo'));  


const createTodo = (req,res)=>{

    let { name, title, desc } = req.body;
    let userId = req.user.user_id;
    console.log(" name, title, desc"+ name+ title+ desc )
    Todo.create(
      { 
        todo_name: name,
         todo_title:title,
          todo_desc:desc,
          todo_state:"P",
          user_id:userId
        }
        )
      .then((response,err)=>{
        if(!err){
            res.send('Insertion was successful; '+response)
        }
        else{ 
          res.send(err)
          console.log(err.message) 
        }
      })
      
  }

module.exports = createTodo;