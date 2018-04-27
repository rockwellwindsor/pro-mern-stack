const express = require('express');
const app = express(); // Instantiates the application

app.use(express.static('static')); // Mounts the middleware

app.listen(3000, function() {
  console.log('Listening on port 3000...')
});
