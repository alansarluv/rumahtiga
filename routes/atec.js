const path = require('path');

const express = require('express');

const atecController = require('../controllers/atec');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

router.get('/atec', isAuth, atecController.getIndex);
router.get('/atec/form', isAuth, atecController.getForm);
router.get('/atec/report', isAuth, atecController.getReport);
router.get('/atec/report/:atecId', isAuth, atecController.getReportDetail);

// add validation here lately
router.post('/atec/form-child', isAuth, atecController.postFormChild);
router.post('/atec/form-report', isAuth, atecController.postFormReport);
router.post('/atec/form-delete', isAuth, atecController.postFormDelete);


module.exports = router;
