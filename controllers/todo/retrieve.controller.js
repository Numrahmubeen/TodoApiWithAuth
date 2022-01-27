const path = require('path')
const Todo = require(path.join(__dirname, '../../models/Todo'));
const {
  errorMessage, successMessage, status,
} = require(path.join(__dirname, '../../helpers/status')); 

const retrieveAllTodos = (req,res)=>{
try {
  Todo.find({
    user_id: req.params.userId
    
}).then(todos =>{
  if(!todos){
    errorMessage.error = 'Todos not exist';
    return res.status(status.notfound).send(errorMessage);
  }
  successMessage.data = todos;
  return res.status(status.success).send(successMessage);
}).catch(function(e) { 
  console.error(e);
  errorMessage.error = 'Operation was not successful';
  return res.status(e.status).send(errorMessage);
    });
} catch (error) {
  console.error(e);
  errorMessage.error = 'Operation was not successful';
  return res.status(e.status).send(errorMessage);
}
  
}

const retrievePendingTodos = (req,res)=>{
  try {
    Todo.find({
      user_id: req.params.userId,
        todo_state: "P",
      
    }).then(todos =>{
      if(!todos){
        errorMessage.error = 'Todos not exist';
        return res.status(status.notfound).send(errorMessage);
      }
      successMessage.data = todos;
      return res.status(status.success).send(successMessage);
    }).catch(function(e) { 
      console.error(e);
      errorMessage.error = 'Operation was not successful';
      return res.status(e.status).send(errorMessage);});
  } catch (error) {
    console.error(e);
      errorMessage.error = 'Operation was not successful';
      return res.status(e.status).send(errorMessage);
    }
  }

const retrieveCompleteTodos = (req,res)=>{

  Todo.find({
    user_id: req.params.userId,
      todo_state: "C",
    
  }).then(todos =>{
    if(!todos){
      errorMessage.error = 'Todos not exist';
      return res.status(status.notfound).send(errorMessage);
    }
    successMessage.data = todos;
    return res.status(status.success).send(successMessage);
  }).catch(function(e) { 
    console.error(e);
    errorMessage.error = 'Operation was not successful';
    return res.status(e.status).send(errorMessage);
      });
}

const retrieveTodoById = (req,res)=>{

  Todo.find({
    user_id: req.params.userId,
    _id: req.params.id,
  }).then(todos =>{
  //  res.send(req.params.id+"user id "+req.params.userId)
    if(!todos){
      errorMessage.error = 'Todos not exist';
      return res.status(status.notfound).send(errorMessage);
    }
    successMessage.data = todos;
    return res.status(status.success).send(successMessage);
  }).catch(function(e) { 
    console.error(e);
    errorMessage.error = 'Operation was not successful';
    return res.status(e.status).send(errorMessage);
 });
}

module.exports ={ 
  retrieveAllTodos,
  retrievePendingTodos,
  retrieveCompleteTodos,
  retrieveTodoById
}