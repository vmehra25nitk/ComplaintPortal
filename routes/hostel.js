const path = require('path');

const express = require('express');

const hostelController = require('../controllers/hostel');

const router = express.Router();

router.get('/readHostel', hostelController.readHostelComplaint);

module.exports = router;