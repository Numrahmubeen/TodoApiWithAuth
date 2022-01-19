const updateTodo =(req,res)=>{

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
  }
module.exports = updateTodo;