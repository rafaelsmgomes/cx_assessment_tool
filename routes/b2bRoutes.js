const express = require('express'); 
const b2bControl = require('../controllers/b2bController');

// ------------------------------------------------------------
// ROUTES
// ------------------------------------------------------------

const router = express.Router();

router.get('/', b2bControl.renderTool);
router.get('/htmlversion/:id', b2bControl.createHTMLversion);
router.post('/api', b2bControl.generateData); 
router.get('/api2/:id', b2bControl.getOverallResults);
router.get('/pdfdata/:id', b2bControl.sendDataToPDF);
router.get('/pdf/:id', b2bControl.generatePDF);

module.exports = router; 


