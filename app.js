
const express = require('express');
const bodyparser = require('body-parser');
const Todo = require("./models/Todo");


const app = express();
const port = 3000;

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

app.listen(port, function (error) {
    if (error)
        throw error;
    else
        console.log("Server is running at port "+port);
});
