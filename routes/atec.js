const path = require('path');

const express = require('express');

const atecController = require('../controllers/atec');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

router.get('/atec', isAuth, atecController.getIndex);

module.exports = router;
