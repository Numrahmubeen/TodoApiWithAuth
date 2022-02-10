<h1>TodoApi</h1>
<h3>About: </h3>
Simple API Endpoints implemented with node.js, GraphQl, mongoose and MongoDB
<h3> Use: </h3>
run npm start in cmd at the folder location and observe log to know about running Port
# graphql>mutation.js & queries.js files contain all of the mutatation and queries respectively

    - mutation{
        - register(email:"hu@gmail.com",password:"hyene",name:"xyz")// register new user and provide token
        - login(email:"hu@gmail.com",password:"hyene") // login user and provide token
        - addTodo(name:"First title",title:"title no 1",description:"fvvbbn bhbb"){ /* require token in header*/
          name
          title
          desc
          state
          }
        } 
        - UpdateTodo(todoId:"6203dbc2896340337045b2b9",state:"P",){ // require token in header
          todo_name
          todo_title
          todo_desc
          id
          todo_state
          user{
              name
              email
              id
          }
        }
    - query{
        -Todos{ // require token in header
          todo_name
          todo_title
          todo_desc
          id
          todo_state
          user{
              name
              email
              id
          }
        -PendingTodos{//} // require token in header
        -CompleteTodos{//} // require token in header

        
    }
}
    }

