const express = require('express');
const router = express.Router();

// const auth = require('../middleware/auth');
// const validateAppVersion = require('../middleware/auth');
const { createTodo,
    retrieveAllTodos,
    retrievePendingTodos,
    retrieveCompleteTodos,
    retrieveTodoById, 
    updateTodo,
} = require('../controllers/todo');

// router.post('/saveTodo', auth, validateAppVersion, createTodo);

router.post('/saveTodo', createTodo);

router.post('/', retrieveAllTodos);
router.post('/pending', retrievePendingTodos);
router.post('/complete', retrieveCompleteTodos);
router.post('/todos/:id', retrieveTodoById);
router.post('/edit/:todo_id', updateTodo);



module.exports = router;