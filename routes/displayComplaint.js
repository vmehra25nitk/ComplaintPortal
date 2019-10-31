const path = require('path');

const express = require('express');

const displayComplaintController = require('../controllers/displayComplaint');

const router = express.Router();

router.post('/getAllComplaints', displayComplaintController.displayComplaint);

// STUDENT

router.post('/getStudentComplaints', displayComplaintController.getStudentComplaints);

// ADMIN

router.post('/getAdminComplaints', displayComplaintController.getAdminComplaints);

router.post('/getComplaintByCategoryAdmin', displayComplaintController.getComplaintByCategoryAdmin);

router.post('/getComplaintByCategoryStudent', displayComplaintController.getComplaintByCategoryStudent);

router.get('/getAllStatistics', displayComplaintController.getStatistics);

module.exports = router;