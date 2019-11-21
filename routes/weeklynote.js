const path = require('path');

const express = require('express');

const weeklynoteController = require('../controllers/weeklynote');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

router.get('/weekly-note/form', isAuth, weeklynoteController.getForm);

module.exports = router;
