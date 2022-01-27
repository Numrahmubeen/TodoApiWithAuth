  const mongoose = require('mongoose');
  const url = "mongodb://localhost/todoApi";
  mongoose.connect(url,{
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true
  })
  
  // const con = mongoose.connection
  // con.on('open',function(){
  //     console.log("connected moongose..")
  // })
  module.exports = mongoose;