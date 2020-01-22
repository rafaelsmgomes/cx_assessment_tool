const express = require('express'); 

const cxController = require('../controllers/cxController');

const router = express.Router();

router.get('/', cxController.renderTool);
router.get('/htmlversion/:id', cxController.createHTMLversion);
router.post('/api', cxController.generateData); 
router.get('/api2/:id', cxController.getOverallResults);
router.get('/pdfdata/:id', cxController.sendDataToPDF);
router.get('/pdf/:id', cxController.generatePDF);

module.exports = router;