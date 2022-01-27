const express = require('express');
const mongoose = require('mongoose');
const url = "mongodb://localhost/todoApi";
//mongodb://localhost:27017
const app = express();
mongoose.connect(url,{
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})

const con = mongoose.connection
con.on('open',function(){
    console.log("connected moongose..")
})