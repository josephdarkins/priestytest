var express = require('express');
var app = express();


var port = process.env.PORT || 3000;



app.get('/', function(req, res) {
    res.send('Hello Priesty!');
    console.log('Hello priesty \n');
});

app.listen(port, function () {
  console.log('SMS receive app listening on port 3000!');
});