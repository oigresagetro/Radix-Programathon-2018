const express = require('express');
const router = express.Router();


const appController = require('../Controllers/app.controllers');

router.post('/', appController.login); //login function

//router.get('/', appController.home); // //Home page test button

//router.post('/', appController.register); //Así o mas obvio?

module.exports = router;
