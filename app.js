
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
const mountRoutes = require('./routes');
app.use(bodyParser.json());

// mount routes 
mountRoutes(app);

app.listen(port, function (error) {
    if (error)
        throw error;
    else
        console.log("Server is running at port "+port);
});
