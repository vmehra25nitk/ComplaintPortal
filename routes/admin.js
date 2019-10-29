const path = require('path')

const express = require('express');

const router = express.Router();

const adminController = require('../controllers/admin');

router.get('/adminSignIn', adminController.getAdminSignIn);

router.get('/adminHomePage', adminController.getAdminHomePage);

module.exports = router;