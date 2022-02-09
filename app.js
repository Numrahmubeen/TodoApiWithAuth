
const express = require('express');
const bodyparser = require('body-parser');
const { graphqlHTTP } = require("express-graphql");
const schema = require("./graphql/schema")
const { authenticate } = require("./middleware/auth")


const app = express();
const port = 5000;

//enable form post variables : a config change
app.use(express.urlencoded({extended:true}));
app.use(authenticate);
  //db config info 

const mongoose = require("./config/database");
// connection to mongodb
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

  //handle conversation to and from json 
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// // mount routes 
// mountRoutes(app);
app.use("/graphql",graphqlHTTP({
  schema : schema,
  graphiql:true
}))

app.listen(port, function (error) {
    if (error)
        throw error;
    else
        console.log("Server is running at port "+port);
});
