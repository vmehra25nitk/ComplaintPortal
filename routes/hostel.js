const path = require('path');

const express = require('express');

const hostelController = require('../controllers/hostel');

const router = express.Router();

router.post('/readHostel', hostelController.readHostelComplaint);

module.exports = router;