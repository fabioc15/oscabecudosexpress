const express = require('express');
const app = express();
const port = 5000;

const path = require('path');

app.use(express.static('public'))

// Serving static files (like HTML)
const basepath = path.join(__dirname);

// Serve users.html when accessing /users
app.get('/users', (req, res) => {
    res.sendFile(path.join(basepath, 'users.html'));
});

// Serve index.html when accessing /
app.get('/', (req, res) => {
    res.sendFile(path.join(basepath, 'index.html'));
});

app.listen(port, () => {
    console.log(`App ta funfando!\nPorta: ${port}`);
});

