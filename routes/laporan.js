const path = require('path');

const express = require('express');
const laporanController = require('../controllers/laporan');
const router = express.Router();

router.get('/laporan', laporanController.getIndex);

module.exports = router;
