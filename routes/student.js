const path = require('path');

const express = require('express');

const studentController = require('../controllers/student');

const router = express.Router();

router.get('/getAllStudents', studentController.getAllStudents);

router.get('/getStudentById', studentController.getStudentById);

router.post('/addStudent', studentController.addStudent);

router.post('/updateStudent', studentController.updateStudent);

router.post('/deleteStudent', studentController.deleteStudentById);

module.exports = router;

