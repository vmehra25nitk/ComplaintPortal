const path = require('path');

const express = require('express');

const complaintController = require('../controllers/complaint');

const router = express.Router();

router.post('/createComplaint', complaintController.createComplaint);

router.get('/readAllComplaint', complaintController.readAllComplaint);

router.get('/readComplaintByCategory', complaintController.readComplaintByCategory);

router.post('/updateComplaint', complaintController.updateComplaint);

router.post('/deleteComplaintById', complaintController.deleteComplaintById);

module.exports = router;