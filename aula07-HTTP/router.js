const http = require('http');

var createRouter = function (port) {

  var api = {};//get & post
  var routes = {};//rotas
  var methods = ['GET', 'POST'];//metodos

  //encorpora os métodos
  methods.forEach( function(method){
    routes[method] = {};//metodos viram objetos
    api[method.toLowerCase()] = function(path, fn){
      routes[method][path] = fn;
    };
  });

  http.createServer (function (req, res){
    res.setHeader('Access-Control-Allow-Origin', 'localhost:8000');
    if (!routes[req.method][req.url]) return res.end();
    routes[req.method][req.url](req, res);
    //req.method retorna GET/POST
    //req.url retorna a URL
  }).listen(port);

  return api;

};

module.exports = createRouter;
