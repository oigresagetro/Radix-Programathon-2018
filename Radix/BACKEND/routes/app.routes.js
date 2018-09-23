const express = require('express');
const router = express.Router();


const appController = require('../Controllers/app.controllers');

router.post('/', appController.createParent);
router.get('/', appController.getParent);
router.get('/delete:id', appController.deleteParent);

module.exports = router;
