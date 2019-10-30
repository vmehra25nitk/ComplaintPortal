const path = require('path');

const express = require('express');

const feesController = require('../controllers/fees');

const router = express.Router();

router.post('/readFees', feesController.readFeesComplaint);

module.exports = router;