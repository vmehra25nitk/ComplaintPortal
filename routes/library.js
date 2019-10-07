const path = require('path');

const express = require('express');

const libraryController = require('../controllers/library');

const router = express.Router();

router.post('/readLibrary', libraryController.readLibraryComplaint);

module.exports = router;