const express = require('express');
const app = express();

// ייבוא קבצי הנתיבים 
const animalsRoutes = require('./routes/animals');
const sheltersRoutes = require('./routes/shelters');

// הגדרת הנתיב לדף הבית
app.get('/', (req, res) => {
    res.send('Welcome to PawMatch');
});

// חיבור הראוטים לכתובות 
app.use('/api/animals', animalsRoutes); 
app.use('/api/shelters', sheltersRoutes);

// נתיב שגיאה 404
app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

// הרצת השרת על פורט 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});