const path = require('path')
const Todo = require(path.join(__dirname, '../../models/Todo')); 

const retrieveAllTodos = (req,res)=>{
    Todo.findAll().then( (err,todos) =>{
        if(!err){
          res.send(result.rows);
        }
        else{
          res.send(err);
        }
      }).catch(function(error) { 
            console.error(error);
    });
}

const retrievePendingTodos = (req,res)=>{

  Todo.findAll({
    where: {
      todo_state: "P",
    }
  }).then((err,todos) =>{
    if(!err){
      res.send(result.rows);
    }
    else{
      res.send(err);
    }
  }).catch(function(error) { 
        console.error(error);
});
}

const retrieveCompleteTodos = (req,res)=>{

  Todo.findAll({
    where: {
      todo_state: "C",
    }
  }).then((err,todos) =>{
    if(!err){
      res.send(result.rows);
    }
    else{
      res.send(err);
    }
  }).catch(function(error) { 
        console.error(error);
      });
}

const retrieveTodoById = (req,res)=>{

  Todo.findAll({
    where: {
      todo_id: req.params.id,
    }
  }).then((err,todos) =>{
    if(!err){
      res.send(result.rows);
    }
    else{
      res.send(err);
    }
  }).catch(function(error) { 
        console.error(error);
      });
}

module.exports ={ 
  retrieveAllTodos,
  retrievePendingTodos,
  retrieveCompleteTodos,
  retrieveTodoById
}