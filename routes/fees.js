const path = require('path');

const express = require('express');

const feesController = require('../controllers/fees');

const router = express.Router();

router.post('/readFees', feesController.readFeesComplaint);

router.post('/testing',feesController.test)

module.exports = router;