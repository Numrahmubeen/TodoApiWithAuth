const createTodo = (req,res)=>{

    let { todo_name, todo_title, todo_desc } = req.body;
  
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
  }

module.exports = createTodo;