const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 8080;

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('website'));

// Initialize an empty object to store data
let projectData = {};

// Routes
app.get('/all', (req, res) => {
  res.send(projectData);
});

app.post('/addWeatherData', (req, res) => {
  projectData.temperature = req.body.temperature;
  projectData.date = req.body.date;
  projectData.user_response = req.body.user_response;
  console.log(projectData);
  res.end();
});

// Start the server
const server = app.listen(port, () => {
  console.log(`Server is running on localhost:${port}`);
});
