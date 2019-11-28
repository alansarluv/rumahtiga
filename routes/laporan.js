const path = require('path');

const express = require('express');
const laporanController = require('../controllers/laporan');
const isAuth = require('../middleware/is-auth');
const isDMR = require('../middleware/is-dmr');
const router = express.Router();

router.get('/laporan', isAuth, isDMR, laporanController.getIndex);

module.exports = router;
