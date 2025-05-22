const express = require('express');
const app = express();
const port = 3000;

// Set up a route for the homepage
app.get('/', (req, res) => {
  res.send('<h1 style="text-align:center;">Welcome to Node js App! this a task2 using vmss....!!</h1>');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
