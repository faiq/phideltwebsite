var express = require('express')
  , app = express()
  , path = require('path')
  , http = require('http')
  , server = http.createServer(app); 

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.set('views', './views'); 

app.get('/', function (req, res){
  res.render('index')
})

server.listen(3000);  
