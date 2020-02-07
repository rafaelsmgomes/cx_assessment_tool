const express = require('express'); 
const cxControl = require('../controllers/cxController');

// ------------------------------------------------------------
// ROUTES
// ------------------------------------------------------------

const router = express.Router();

router.get('/', cxControl.renderTool);
router.get('/htmlversion/:id', cxControl.createHTMLversion);
router.post('/api', cxControl.generateData); 
router.get('/api2/:id', cxControl.getOverallResults);
router.get('/pdfdata/:id', cxControl.sendDataToPDF);
router.get('/pdf/:id', cxControl.generatePDF);

module.exports = router; 


