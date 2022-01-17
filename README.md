<h1>TodoApi</h1>
<h3>About: </h3>
Simple API Endpoints implemented with node.js, express, sequelize and postgres DB
<h3> Use: </h3>
run npm start in cmd at the folder location and observe log to know about running Port
# app.js file contains all of the routes

- "http://localhost:4000/" will send all todos stored in DB
- "http://localhost:4000/pending" will send pending todos stored in DB
- "http://localhost:4000/complete" will send complete todos stored in DB
- "http://localhost:4000/todos/:id" will send Single Todo Item with specific id  
- "http://localhost:4000/saveTodo" will store new todo to request that contain 
  - {
    todo_name:"value",
    todo_title:"value",
    todo_desc:"value",
  }
- "http://localhost:4000/edit/:todo_id" will update todo_state to request that contain 
  - { todo_state: "P"/"C" }
 

