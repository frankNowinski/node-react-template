const express = require('express')
const path = require('path')
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080
const app = express()

// serve static assets normally
app.use(express.static(__dirname + '/public'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).

app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});

app.listen(port)
console.log("server started on port " + port)
