const router = require('./router');

var app = router(3412);

var operadoras = [
  {nome: "oi", codigo: 14, categoria: "celular", preco:2},
  {nome: "vivo", codigo: 15, categoria: "celular", preco:1},
  {nome: "tim", codigo: 41, categoria: "celular", preco:3}
];

var contatos = [
  {nome: "Pedro", telefone:"99998888", data: "2015-04-13T12:53:46.20Z",
    cor:"blue",
    operadora:{
      nome:"Oi",
      cod:"14",
      categoria:"celular"
    }
  },

  {
    nome:"Ana",
    telefone:"99998877",
    data: "2015-04-13T12:53:46.20Z",
    cor:"red",
    operadora:{
      nome:"Oi",
      cod:"14",
      categoria:"celular"
    }
  },
  {
    nome:"Maria",
    telefone:"99998866",
    data: "2015-04-13T12:53:46.20Z",
    cor:"yellow",
    operadora:{
      nome:"Oi",
      cod:"14",
      categoria:"celular"
    }
  }
];

app.interceptor(function(req, res, next) {
  // console.log('chamando interceptor 1');
  res.setHeader('Access-Control-Allow-Origin', 'localhost:8000');
  next();
});

app.interceptor(function (req, res, next) {
  // console.log('chamando interceptor 2');
  res.setHeader('Content-Type', 'application/json;charset=UTF-8');
});

app.get('/operadoras', function(req, res){
  res.write(JSON.stringify(operadoras));
  res.end();
});

app.get('/contatos', function(req, res){
  res.write(JSON.stringify(contatos));
  res.end();
});
