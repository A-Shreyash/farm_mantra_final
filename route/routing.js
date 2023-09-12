const express = require('express');
const router = express.Router();
const controller = require('../containernode/form.js');
router.get('/',controller.home)
router.get('/model1', controller.mod1);
router.post('/model1', controller.formprocess);
router.get('/model2',controller.model2)
router.post('/model2', controller.formprocess2);
router.get('/model3',controller.model3)
router.post('/model3', controller.formprocess3);

module.exports = router