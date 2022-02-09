const { TodoType } = require("./types");

const User = require("../models/User");

const{ GraphQLString } = require("graphql");
const {
    isValidEmail,
    validatePassword,
    isEmpty,
    generateUserToken,
  } = require("../helpers/validation");
const { successMessage, errorMessage } = require("../helpers/status");
const { use } = require("express/lib/application");
const Todo = require("../models/Todo");

const register = {
    type : GraphQLString,
    args:{
        email : {type : GraphQLString},
        name : {type : GraphQLString},
        password : {type : GraphQLString},
    },
    async resolve(_,args){
        const {email,name,password} = args;
        console.log(args);
        const user = User.createUser(name,email,password);
    //    const user = createUser(name,email,password);

        // await User.create({
        //     name: name, 
        //     email: email,
        //     password: password
        //   });
        const token = generateUserToken(user);
        return token
    }
}
const login = {
    type : GraphQLString,
    args:{
        email : {type : GraphQLString},
        password : {type : GraphQLString},
    },
    async resolve(_,args){
        const {email,password} = args;
       const user = await User.findOne(email);
        if(!user || args.password!==user.password){
            throw new Error("Invalid Credentials");
        }
        const token = generateUserToken(user);
        return token
    }
}

const addTodo = {
    type: TodoType,
    description: "Create Todo",
    args: {
      name: { type: GraphQLString },
      title: { type: GraphQLString },
      description: {type:GraphQLString},
    },
     resolve(parent, args, { user }) {
      console.log("Verified User ", user+"args "+args.name+ " title: "+args.title)
      if (!user) {
        throw new Error("Unauthorized Access Blocked")
      }
      try {
        const todo =new Todo({ user_id: user._id,
          todo_name: args.name,
          todo_title: args.title,
           todo_desc: args.description,
           todo_state:"P"});
          todo.save();
        return "Todo saved successfully!";
      } catch (error) {
        console.log("Error : "+error);
        return null;
      }
        
    },
}

const UpdateTodo = {
  type: TodoType,
  description: "Update Todo",
  args: {
    todoId: { type: GraphQLString },
    state: {type:GraphQLString},
  },
   async resolve(parent, {todoId,state}, { user }) {
    if (!user) {
      throw new Error("Unauthorized Access Blocked")
    }
    try {
      console.log(state+" state . Id "+todoId)
      const updatedTodo = await Todo.findOneAndUpdate(
        { 
        _id: todoId ,
         user_id: user._id,
        },
        {
          todo_state : state,
        },
        {
          new:true,
          runValidators:true,
        }
      )
      return updatedTodo;
    } catch (error) {
      console.log("Error : "+error);
      return null;
    }
      
  },
}


  
module.exports = { register,login ,addTodo, UpdateTodo}
