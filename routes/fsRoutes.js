const express = require('express');  
const fsControl = require('../controllers/fsController');

// ------------------------------------------------------------
// ROUTES
// ------------------------------------------------------------

const router = express.Router();

router.get('/', fsControl.renderTool);
router.get('/htmlversion/:id', fsControl.createHTMLversion);
router.post('/api', fsControl.generateData); 
router.get('/api2/:id', fsControl.getOverallResults);
router.get('/pdfdata/:id', fsControl.sendDataToPDF);
router.get('/pdf/:id', fsControl.generatePDF);

module.exports = router; 


