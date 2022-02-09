const { GraphQLList, GraphQLString } = require("graphql");
const { UserType, TodoType } = require("./types");
const User = require("../models/User");
const Todo = require("../models/Todo");


const Users = {
    type: new GraphQLList(UserType),
    async resolve(parent,args){
        const users = await User.find()
        return users;
    },
}
const Todos = {
    type: new GraphQLList(TodoType),
    async resolve(parent, args, { user }) {
        if (!user) {
            throw new Error("Unauthorized Access Blocked")
          }
        const todos = await Todo.find({
            user_id : user._id
        })
        return todos;
    },
}
const PendingTodos = {
    type: new GraphQLList(TodoType),
    async resolve(parent, args, { user }) {
        if (!user) {
            throw new Error("Unauthorized Access Blocked")
          }
        const todos = await Todo.find({
            user_id : user._id,
            todo_state:"P"
        })
        return todos;
    },
}
const CompleteTodos = {
    type: new GraphQLList(TodoType),
    async resolve(parent, args, { user }) {
        if (!user) {
            throw new Error("Unauthorized Access Blocked")
          }
        const todos = await Todo.find({
            user_id : user._id,
            todo_state:"C"
        })
        return todos;
    },
}
const TodoById = {
    type: new GraphQLList(TodoType),
    args: {
        id: { type: GraphQLString },
      },
    async resolve(parent, args, { user}) {
        if (!user) {
            throw new Error("Unauthorized Access Blocked")
          }
        const todo = await Todo.find({
            user_id : user._id,
            _id:args.id
        })
        return todo;
    },
}

module.exports = {Users,Todos,PendingTodos,CompleteTodos,TodoById}