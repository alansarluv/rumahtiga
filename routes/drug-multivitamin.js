const path = require('path');

const express = require('express');
const drugMultivitaminController = require('../controllers/drug-multivitamin');
const isAuth = require('../middleware/is-auth');
const router = express.Router();

router.get('/drug-multivitamin', isAuth, drugMultivitaminController.getIndex);

module.exports = router;
