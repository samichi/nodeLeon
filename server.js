var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000);

//routing
/*app.get('/', function(req, res){
  res.type('text/plain');
  res.send('Mi pagina principal');
});*/

app.get('/', function(req, res){
  res.type('HTML');
  res.send('<div><h1>Welcome to my Page!!!</h1></div>');
});

/*
app.get('/', function(req, res){
  res.type('HTML');
  res.sendFile('index.html');
});*/

app.get('/about', function(req, res){
  res.type('text/plain');
  res.send('Mi pagina de Acerca');
});

app.get('/about/contact', function(req, res){
  res.type('text/plain');
  res.send('Contactenos de mi pagina');
});

//500 Error page
app.use(function(err, res, req, next){
  console.error(err.stack);
  res.type('text/plain');
  res.status(500);
  res.send('500 - server error');
});

//404 Page not found
app.use(function(req, res){
  res.type('text/plain');
  res.status(404);
  res.send('404 - Not Found');
});

//listen port
app.listen(app.get('port'), function(){
  console.log('express on localhost:' + app.get('port'));
});