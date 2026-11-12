# PawMatch

שרת Express לתרגיל הגשה 2 בקורס תכנות לצד שרת סייבר.

הפרויקט כולל שני משאבים: בעלי חיים ועמותות. הנתונים בשלב זה נמצאים במערכים קבועים בזיכרון, והשרת מחזיר תשובות JSON.

## הרצה

יש לפתוח טרמינל בתיקיית הפרויקט ולהריץ:

```bash
npm install
node app.js
```

לאחר ההפעלה אפשר להיכנס לכתובות הבאות בדפדפן:

- `http://localhost:3000/api/animals`
- `http://localhost:3000/api/animals/featured`
- `http://localhost:3000/api/animals/2`
- `http://localhost:3000/api/animals/search?type=כלב`
- `http://localhost:3000/api/shelters`
- `http://localhost:3000/api/shelters/summary`
- `http://localhost:3000/api/shelters/101`
- `http://localhost:3000/api/shelters/search?region=שפלה`

נתיבי `POST`, `PUT` ו-`DELETE` מוגדרים עבור כל משאב. לפי שלב התרגיל, הם עדיין לא משנים את הנתונים ומחזירים את המערך הקיים. לבדיקת הפעולות האלה אפשר להשתמש ב-Postman או בכלי דומה.
