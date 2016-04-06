var express = require('express');
var app = express();
var cfenv = require("cfenv");
var appEnv = cfenv.getAppEnv();

app.get('/', function(req, res) {
  var services = appEnv.getServices();
  var dbUri = services.mongo.credentials.uri
  res.send(dbUri);
});

app.listen(process.env.PORT);
