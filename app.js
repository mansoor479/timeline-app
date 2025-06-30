const express = require('express');
const path = require('path');
const config = require('./config/config');
const timelineRoutes = require('./routes/timelineRoutes');

const app = express();

// Instellingen
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/', timelineRoutes);

app.listen(config.port, () => {
  console.log(`Server draait op http://localhost:${config.port}`);
});
