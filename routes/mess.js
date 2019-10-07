const path = require('path');

const express = require('express');

const messController = require('../controllers/mess');

const router = express.Router();

router.post('/readMess', messController.readMessComplaint);

module.exports = router;