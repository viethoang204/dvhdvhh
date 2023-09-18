const express = require('express');
const app = express();

// Port number
const port = 3000;

// Set the view engine to ejs

// Use the static folder

// Home route
app.get('/', function (req, res) {
  // Your work starts here
});

// Random route
// Your work starts here

// Start the server
app.listen(port, function () {
  console.log(`Server started on: http://localhost:${port}`);
});
