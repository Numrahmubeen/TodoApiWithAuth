const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
// const validateAppVersion = require('../middleware/auth');
const { 
    signup,
    siginUser,
} = require('../controllers/auth');

// router.post('/saveTodo', auth, validateAppVersion, createTodo);

router.post('/signup', signup);
router.post('/login', siginUser
);

module.exports = router;