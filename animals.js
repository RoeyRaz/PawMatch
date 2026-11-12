// נתוני JSON קבועים של בעלי החיים
const animals = [
    { id: 1, name: "לונה", type: "חתולה", age: 3, activityLevel: "נמוכה", environment: "מתאימה לדירה", shelter: "כפות קרובות", costEstimate: "250-500" },
    { id: 2, name: "טופי", type: "כלב", age: 4, activityLevel: "בינונית", environment: "שביל לחיים", shelter: "שביל לחיים", costEstimate: "350-650" },
    { id: 3, name: "נורי", type: "חתול", age: 1, activityLevel: "גבוהה", environment: "מתאים לדירה", shelter: "כפות קרובות", costEstimate: "250-500" },
    { id: 4, name: "מיקה", type: "כלבה", age: 2, activityLevel: "גבוהה", environment: "שפלה", shelter: "שביל לחיים", costEstimate: "450-800" }
];

// GET /api/animals - החזרת כל בעלי החיים
exports.getAnimals = (req, res) => {
    res.json(animals);
};

// GET /api/animals/featured - בעלי חיים נבחרים
exports.getFeaturedAnimals = (req, res) => {
    const featuredAnimals = animals.filter(animal => animal.id === 1 || animal.id === 2);
    res.json({
        title: "בעלי חיים נבחרים השבוע",
        data: featuredAnimals
    });
};

// GET /api/animals/search?type=כלב - חיפוש לפי סוג בעל החיים
exports.searchAnimals = (req, res) => {
    const type = req.query.type;
    if (!type) {
        return res.json(animals);
    }

    // כך חיפוש "כלב" מחזיר גם "כלבה"
    const filtered = animals.filter(animal => animal.type.startsWith(type));
    res.json(filtered);
};

// GET /api/animals/:id - שליפת בעל חיים לפי מזהה
exports.getAnimalById = (req, res) => {
    const id = Number(req.params.id);
    const animal = animals.find(animal => animal.id === id);
    if (!animal) {
        return res.status(404).json({ message: 'Animal not found' });
    }
    res.json(animal);
};

// פעולות שיושלמו בהמשך כאשר נוסיף שמירת נתונים
exports.addAnimal = (req, res) => {
    res.json(animals);
};

exports.updateAnimal = (req, res) => {
    res.json(animals);
};

exports.deleteAnimal = (req, res) => {
    res.json(animals);
};
