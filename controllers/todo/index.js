const createTodo = require('./create.controller');
const updateTodo = require('./update.controller');
const {retrieveAllTodos, retrievePendingTodos,retrieveCompleteTodos, retrieveTodoById} = require('./retrieve.controller');

module.exports = {
    createTodo,
    retrieveAllTodos,
    retrievePendingTodos,
    retrieveCompleteTodos,
    retrieveTodoById,
    updateTodo,
};