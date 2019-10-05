const path = require('path');

const express = require('express');

const complaintController = require('../controllers/complaint');

const router = express.Router();

router.post('/createComplaint', complaintController.createComplaint);

module.exports = router;