const { GraphQLObjectType, GraphQLSchema } = require("graphql")
const {Users,Todos,PendingTodos,CompleteTodos,TodoById} = require("./queries")
const {register,login,addTodo,UpdateTodo} = require("./mutations")

//define query type
const QueryType = new GraphQLObjectType({
    name:"QueryType",
    description : "Queries",
    fields : {
        Users,
        Todos,PendingTodos,CompleteTodos,TodoById
    },

})
//define mutation type
const MutationType = new GraphQLObjectType({
    name:"MutationType",
    description : "Mutations",
    fields : {
        register,
        UpdateTodo,
        login,
        addTodo
    },

})

module.exports = new GraphQLSchema({
    query : QueryType,
    mutation : MutationType
})