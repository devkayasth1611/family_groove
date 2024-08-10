const express = require('express');
const router = express.Router();
const Login = require('../controller/login');

router.post('/login', Login.login);

module.exports = router;