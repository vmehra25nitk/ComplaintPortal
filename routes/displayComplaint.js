const path = require('path');

const express = require('express');

const displayComplaintController = require('../controllers/displayComplaint');

const router = express.Router();

router.get('/getAllComplaints', displayComplaintController.displayComplaint);

// STUDENT

router.get('/getStudentComplaints', displayComplaintController.getStudentComplaints);

// ADMIN

router.get('/getAdminComplaints', displayComplaintController.getAdminComplaints);

router.get('/getComplaintByCategoryAdmin', displayComplaintController.getComplaintByCategoryAdmin);

router.get('/getComplaintByCategoryStudent', displayComplaintController.getComplaintByCategoryStudent);

module.exports = router;