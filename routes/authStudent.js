/*jshint esversion: 6 */

const path = require('path');

const express = require('express');

const authStudentController = require('../controllers/authStudent');

const router = express.Router();

router.post('/studentSignUp', authStudentController.signUp);

router.post('/studentSignIn', authStudentController.signIn);

router.get('/studentSignUp', function(req, res) {
    res.render("signUpStudent", {
        pageTitle: "Sign Up"
    });
});

router.get('/studentSignIn', function(req, res) {
    res.render('signInStudent', {
        pageTitle: "Sign In"
    });
});


module.exports = router;
