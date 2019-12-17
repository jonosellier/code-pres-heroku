const express = require('express');

// create new express app and save it as "app"
const app = express();

// server configuration
const PORT = process.env.PORT || 8080;

// create a route for the app
app.get('/', (req, res) => {
    res.send('go to /editor.html');
});

app.use(express.static('static'));

// make the server listen to requests
app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}/`);
});