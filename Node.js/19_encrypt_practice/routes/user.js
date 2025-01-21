const express = require('express');
const controller = require('../controller/Cuser');
const router = express.Router();

router.get('/', controller.main);

router.get('/signup', controller.getSignUp);
router.post('/signup', controller.postSignUp);

router.get('/login', controller.getLogin);
router.post('/login', controller.postLogin);

router.get('/logout', controller.getLogout);

module.exports = router;
