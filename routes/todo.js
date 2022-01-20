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

router.post('/saveTodo', auth, createTodo);

router.get('/', auth,retrieveAllTodos);
router.get('/pending', auth, retrievePendingTodos);
router.get('/complete', auth, retrieveCompleteTodos);
router.get('/todos/:id', auth, retrieveTodoById);
router.post('/edit/:todo_id', auth, updateTodo);



module.exports = router;