const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const validateAppVersion = require('../middleware/auth');
const { createTodo } = require('../controllers/todo');

router.post('/', auth, validateAppVersion, createTodo);

router.post('/', createTodo);

router.post('/', createTodo);

module.exports = router;