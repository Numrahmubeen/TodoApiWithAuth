
const express = require('express');
const bodyparser = require('body-parser');
const Todo = require("./models/Todo");

const app = express();
const port = 5000;

//enable form post variables : a config change
app.use(express.urlencoded({extended:true}));

  //db config info 

const mongoose = require("./config/database");
// connection to mongodb
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
app.use(express.json({
  type: ['application/json', 'text/plain']
}));

const mountRoutes = require('./routes/index');



// mount routes 
mountRoutes(app);

app.listen(port, function (error) {
    if (error)
        throw error;
    else
        console.log("Server is running at port "+port);
});
