const express = require('express');
const router = express.Router();
const sheltersController = require('../controllers/shelters');

// נתיבים לשליפת עמותות ולחיפוש
router.get('/', sheltersController.getShelters);
router.get('/summary', sheltersController.getSheltersSummary);
router.get('/search', sheltersController.searchShelters);
router.get('/:id', sheltersController.getShelterById);

// פעולות שימומשו בהמשך, בינתיים רק מחזירות נתונים
router.post('/', sheltersController.addShelter);
router.put('/:id', sheltersController.updateShelter);
router.delete('/:id', sheltersController.deleteShelter);

module.exports = router;
