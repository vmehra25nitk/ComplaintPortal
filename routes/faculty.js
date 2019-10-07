const path = require('path');

const express = require('express');

const facultyController = require('../controllers/faculty');

const router = express.Router();

router.post('/readFaculty', facultyController.readFacultyComplaint);

module.exports = router;