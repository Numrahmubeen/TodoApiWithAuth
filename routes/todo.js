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

router.get('/', retrieveAllTodos);
router.get('/pending', retrievePendingTodos);
router.get('/complete', retrieveCompleteTodos);
router.get('/todos/:id', retrieveTodoById);
router.post('/edit/:todo_id', updateTodo);



module.exports = router;