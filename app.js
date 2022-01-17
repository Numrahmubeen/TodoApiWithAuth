
const express = require('express');
const bodyparser = require('body-parser');
const Todo = require("./models/Todo");


const app = express();
const port = 4000;

//enable form post variables : a config change
app.use(express.urlencoded({extended:true}));


  //db config info 

const db = require("./config/database");

  //handle conversation to and from json
const bodyParser = require("body-parser");
app.use(bodyParser.json());

//get all todos
app.get('/',(req,res)=>{
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
}) 
//get pending todos
app.get('/pending',(req,res)=>{

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
}) 
//get Complete todos
app.get('/complete',(req,res)=>{

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
});
//get Todo by Id
app.get('/todos/:id',(req,res)=>{

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
});

//add todo post route
app.post("/saveTodo",(req,res)=>{

  let todo = req.body;

  Todo.create({
    todo_name: todo.todo_name, 
    todo_title: todo.todo_title,
    todo_desc: todo.todo_desc,
    todo_state:"P"}
    )
    .then((response,err)=>{
      if(!err){
          res.send('Insertion was successful')
      }
      else{ 
        res.send(err)
        console.log(err.message) 
      }
    })
})
//edit todo state
app.post("/edit/:todo_id",(req,res)=>{

  let state = req.body.state;
  // if(state == "C"){
  //   state = "P";
  // }else{
  //   state = "C";
  // }
  Todo.update({ todo_state: state }, {
      where: {
          todo_id: req.params.todo_id
      }
    })
    .then((response,err)=>{
      if(!err){
        res.send("Todo state updated sucessfully!")
      }
      else{ 
        res.send(err)
        console.log(err.message) 
      }
    });
});

app.listen(port, function (error) {
    if (error)
        throw error;
    else
        console.log("Server is running at port "+port);
});
