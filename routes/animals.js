const express = require('express');
const router = express.Router();
const animalsController = require('../controllers/animals');

// נתיבים לשליפת בעלי חיים ולחיפוש
router.get('/', animalsController.getAnimals);
router.get('/featured', animalsController.getFeaturedAnimals);
router.get('/search', animalsController.searchAnimals);
router.get('/:id', animalsController.getAnimalById);

// פעולות שימומשו בהמשך, בינתיים רק מחזירות נתונים
router.post('/', animalsController.addAnimal);
router.put('/:id', animalsController.updateAnimal);
router.delete('/:id', animalsController.deleteAnimal);

module.exports = router;
