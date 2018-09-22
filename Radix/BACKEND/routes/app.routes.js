const express = require('express');
const router = express.Router();


const appController = require('../Controllers/app.controllers');

router.post('/', appController.login); //login

module.exports = router;
