const express = require('express');
const router = express.Router();


const appController = require('../Controllers/app.controllers');

//Home functions
router.post('/', appController.login);
router.put('/', appController.register);

//User functions
router.put('/user', appController.makeSupervisor);
router.get('/user', appController.getSupervisor);

//Child functions, from Users
router.put('/user/childs', appController.makeChild);
router.get('/user/childs', appController.getChild);

module.exports = router;
