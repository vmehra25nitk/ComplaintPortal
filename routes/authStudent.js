/*jshint esversion: 6 */

const path = require('path');

const express = require('express');

const authStudentController = require('../controllers/authStudent');

const router = express.Router();

router.post('/studentSignUp', authStudentController.signUp);

router.post('/studentSignIn', authStudentController.signIn);



router.get('/studentSignIn', authStudentController.getStudentSignIn);

router.get('/studentSignUp', authStudentController.getStudentSignUp);

router.get('/studentResetPassword', authStudentController.getResetStudentPassword);

router.post('/studentResetPassword', authStudentController.postResetStudentPassword);


module.exports = router;

// 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