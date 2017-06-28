const http = require('http');

var createRouter = function (port) {

  var api = {};//get & post
  var routes = {};//rotas
  var methods = ['GET', 'POST'];//metodos
  var interceptors = [];//interceptadores - onde vão os headers
  //encorpora os métodos
  methods.forEach( function(method){
    routes[method] = {};//metodos viram objetos
    api[method.toLowerCase()] = function(path, fn){
      routes[method][path] = fn;
    };
  });
  //registra os interceptadores
  api.interceptor = function(interceptor){
    interceptors.push(interceptor);
  };
  //executa todos os interceptadores apartir do 0
  var executeInterceptors = function(number, req, res) {
    var interceptor = interceptors[number];
    if(!interceptor) return;
    interceptor(req, res, function(){//equivalente ao next()
      executeInterceptors(++number,req,res);//chama o proximo
    });
  };

  http.createServer (function (req, res){
    executeInterceptors(0, req, res);
    if (!routes[req.method][req.url]) {
      res.statusCode = 404;
      return res.end();
    }
    routes[req.method][req.url](req, res);
    //req.method retorna GET/POST
    //req.url retorna a URL
  }).listen(port);

  return api;

};

module.exports = createRouter;
