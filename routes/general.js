const express = require('express');
const generalController = require('../controllers/general');
const router = express.Router();

router.get('/', generalController.dashboard)
router.get('/no-access', generalController.noAccess)

module.exports = router;