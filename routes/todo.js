const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
// const validateAppVersion = require('../middleware/auth');
const { createTodo,
    retrieveAllTodos,
    retrievePendingTodos,
    retrieveCompleteTodos,
    retrieveTodoById, 
    updateTodo,
} = require('../controllers/todo');

// router.post('/saveTodo', auth, validateAppVersion, createTodo);

router.post('/saveTodo/:userId', auth, createTodo);

router.get('/:userId', auth,retrieveAllTodos);
router.get('/pending/:userId', auth, retrievePendingTodos);
router.get('/complete/:userId', auth, retrieveCompleteTodos);
router.get('/todos/:userId/:id', auth, retrieveTodoById);
router.post('/edit/:userId/:todo_id', auth, updateTodo);

module.exports = router;
// "name" : "my 3rd",
//        "title" : "mynew title",
//         "desc":"mydescc"