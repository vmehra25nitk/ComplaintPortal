const path = require('path');

const express = require('express');

const labController = require('../controllers/lab');

const router = express.Router();

router.post('/readLab', labController.readLabComplaint);

module.exports = router;