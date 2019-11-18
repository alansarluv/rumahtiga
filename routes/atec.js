const path = require('path');

const express = require('express');

const atecController = require('../controllers/atec');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

router.get('/atec', isAuth, atecController.getIndex);
router.get('/atec/form', isAuth, atecController.getForm);

// add validation here lately
router.post('/atec/form-child', isAuth, atecController.postFormChild);
router.post('/atec/form-report', isAuth, atecController.postFormReport);


module.exports = router;
