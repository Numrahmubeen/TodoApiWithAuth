<h1>TodoApi</h1>
<h3>About: </h3>
Simple API Endpoints implemented with node.js, express, mongoose and MongoDB
<h3> Use: </h3>
run npm start in cmd at the folder location and observe log to know about running Port
# app.js file contains all of the routes

- "http://localhost:4000/auth/signup" with ( email, name, password) from the request will register new user
- "http://localhost:4000/auth/login" with ( email, password) from the request will login and send token and user info
-That token will be send for following request inside header

    - "http://localhost:4000/:userId" will send all todos stored in DB of that specific user
    - "http://localhost:4000/pending/:userId" will send pending todos stored in DB
    - "http://localhost:4000/complete/:userId" will send complete todos stored in DB
    - "http://localhost:4000/todos/:userId/:id" will send Single Todo Item with specific id  
    - "http://localhost:4000/saveTodo/:userId" will store new todo to request that contain 
      - {
        name:"value",
        title:"value",
        desc:"value",
      }
    - "http://localhost:4000/edit/:userId/:todo_id" will update todo_state to request that contain 
      - { state: "P"/"C" }
 

