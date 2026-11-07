const express = require('express');
const router = express.Router();

// נתוני JSON קבועים של עמותות
const shelters = [
    { id: 101, name: "כפות קרובות", region: "אזור המרכז", contactPhone: "050-1111111", email: "contact@karov.org" },
    { id: 102, name: "שביל לחיים", region: "שפלה", contactPhone: "050-2222222", email: "info@shvil.org" }
];

// GET /api/shelters
// החזרת מערך של כל העמותות
router.get('/', (req, res) => {
    res.json(shelters);
});

// GET /api/shelters/summary
// החזרת נתוני סיכום על עמותות
router.get('/summary', (req, res) => {
    const summary = {
        totalShelters: shelters.length,
        regionsCovered: ["אזור המרכז", "שפלה"],
        activeSince: 2026
    };
    res.json({
        message: "סיכום פעילות עמותות ב-PawMatch",
        summaryData: summary
    });
});

module.exports = router;