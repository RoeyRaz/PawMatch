// נתוני JSON קבועים של עמותות
const shelters = [
    { id: 101, name: "כפות קרובות", region: "אזור המרכז", contactPhone: "050-1111111", email: "contact@karov.org" },
    { id: 102, name: "שביל לחיים", region: "שפלה", contactPhone: "050-2222222", email: "info@shvil.org" }
];

// GET /api/shelters - החזרת כל העמותות
exports.getShelters = (req, res) => {
    res.json(shelters);
};

// GET /api/shelters/summary - סיכום העמותות
exports.getSheltersSummary = (req, res) => {
    const summary = {
        totalShelters: shelters.length,
        regionsCovered: ["אזור המרכז", "שפלה"],
        activeSince: 2026
    };
    res.json({
        message: "סיכום פעילות עמותות ב-PawMatch",
        summaryData: summary
    });
};

// GET /api/shelters/search?region=שפלה - חיפוש לפי אזור
exports.searchShelters = (req, res) => {
    const region = req.query.region;
    if (!region) {
        return res.json(shelters);
    }

    const filtered = shelters.filter(shelter => shelter.region === region);
    res.json(filtered);
};

// GET /api/shelters/:id - שליפת עמותה לפי מזהה
exports.getShelterById = (req, res) => {
    const id = Number(req.params.id);
    const shelter = shelters.find(shelter => shelter.id === id);
    if (!shelter) {
        return res.status(404).json({ message: 'Shelter not found' });
    }
    res.json(shelter);
};

// פעולות שיושלמו בהמשך כאשר נוסיף שמירת נתונים
exports.addShelter = (req, res) => {
    res.json(shelters);
};

exports.updateShelter = (req, res) => {
    res.json(shelters);
};

exports.deleteShelter = (req, res) => {
    res.json(shelters);
};
