require('dotenv').config()
const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
    res.send('Hello Atulya Kya haal Hai');
    }
);
app.get('/about', (req, res) => {
    res.send('About Us');
});

app.get('/youtube', (req, res) => {
    res.send('<h2>Youtube</h2>');
});

app.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    }
);