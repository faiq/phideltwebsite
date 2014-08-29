var express = require('express')
  , app = express()
  , path = require('path')
  , http = require('http')
  , server = http.createServer(app); 

app.use(express.static(__dirname + '/public'));
app.set('views', '/views'); 

app.get('/', function (req, res){
  res.sendfile(__dirname + '/views/index.html')
})

server.listen(8000);  
