const express = require('express');
const router = express.Router();

// נתוני JSON קבועים 
const animals = [
    { id: 1, name: "לונה", type: "חתולה", age: 3, activityLevel: "נמוכה", environment: "מתאימה לדירה", shelter: "כפות קרובות", costEstimate: "250-500" },
    { id: 2, name: "טופי", type: "כלב", age: 4, activityLevel: "בינונית", environment: "שביל לחיים", shelter: "שביל לחיים", costEstimate: "350-650" },
    { id: 3, name: "נורי", type: "חתול", age: 1, activityLevel: "גבוהה", environment: "מתאים לדירה", shelter: "כפות קרובות", costEstimate: "250-500" },
    { id: 4, name: "מיקה", type: "כלבה", age: 2, activityLevel: "גבוהה", environment: "שפלה", shelter: "שביל לחיים", costEstimate: "450-800" }
];

// GET /api/animals
// החזרת מערך של כל בעלי החיים
router.get('/', (req, res) => {
    res.json(animals);
});

// GET /api/animals/featured
// החזרת רשימת בעלי חיים נבחרים
router.get('/featured', (req, res) => {
    const featuredAnimals = animals.filter(animal => animal.id === 1 || animal.id === 2);
    res.json({
        title: "בעלי חיים נבחרים השבוע",
        data: featuredAnimals
    });
});

module.exports = router;