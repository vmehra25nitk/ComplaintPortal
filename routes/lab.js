const path = require('path');

const express = require('express');

const labController = require('../controllers/lab');

const router = express.Router();

router.post('/createLabComplaint', labController.createLabComplaint);

module.exports = router;