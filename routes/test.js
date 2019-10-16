const express = require('express');
const path = require('path');

const testController = require('../controllers/test');

const router = express.Router();


router.get('/test',testController.TestCode);

module.exports = router;
