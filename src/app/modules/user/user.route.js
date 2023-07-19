const express = require('express');
const userController = require('./user.controller');
const { verifyToken } = require('../../middlewares/verifyToken');
const router = express.Router();

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/me', verifyToken, userController.getMe);

module.exports = router;
