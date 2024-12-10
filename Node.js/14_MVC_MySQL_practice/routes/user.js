// TODO: 라우트 설정
const express = require('express');
const controller = require('../controller/Cuser');
const router = express.Router();

router.get('/', controller.home);

router.get('/signup', controller.getSignUp);
router.post('/signup', controller.postSignUp);

router.get('/signin', controller.getSignIn);
router.post('/signin', controller.postSignIn);

router.post('/profile', controller.postUser);
router.patch('/profile/edit', controller.patchUser);
router.delete('/profile/delete', controller.deleteUser);

module.exports = router;
