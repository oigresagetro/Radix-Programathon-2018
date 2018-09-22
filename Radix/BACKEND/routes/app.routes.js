const express = require('express');
const router = express.Router();


const appController = require('../Controllers/app.controllers');

router.post('/', appController.login); //login
router.get('/', appController.test); //

module.exports = router;
