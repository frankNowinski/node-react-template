const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;
const mongoose = require('mongoose');
const config = require('./config');
const app = express();

// serve static assets normally
app.use(express.static(__dirname + '/public'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Connect to db
mongoose.connect(config.getDbConnectionString());

// Routes
const users = require('./routes/users');
users(app);

// Default route
app.get('*', function(req, res){
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});

app.listen(port)
console.log("server started on port " + port)
