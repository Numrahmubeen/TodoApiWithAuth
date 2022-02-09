const { GraphQLObjectType, GraphQLID, GraphQLString } = require("graphql");
const User = require("../models/User")
const Todo = require("../models/Todo")

const UserType = new GraphQLObjectType({
    name: "User",
    description :"User Type",
    fields:{
        id : { type: GraphQLID },
        name : {type : GraphQLString},
        email:{type : GraphQLString},
        password:{type : GraphQLString},

    }
});
const TodoType = new GraphQLObjectType({
    name:"Todo",
    description : "Todo Type",
    fields : {
            id:{type:GraphQLID},
            todo_name:{type:GraphQLString},
            todo_title:{type:GraphQLString},
            todo_desc:{type:GraphQLString},
            todo_state:{type:GraphQLString},
            user:{
                type:UserType,
                resolve(parent,args,{user}){
                    return User.findById(user._id)
                }
            }
    
        },
})
module.exports = {UserType,TodoType}

