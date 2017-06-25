//carregando core-module 'net'
const net = require('net');

//se conectando ao servidor
const client = net.connect(3000); //recebe a porta como parâmetro

//ao estabelecer uma conexão o client enviará uma menssagem
client.on('connect', function (){
  client.write("New client connected to the server");
});

//encerra processo ao finalizar conexão
client.on('end', function(){
  process.exit();
});

//ao estabelecer uma conexão o client interpretará uma menssagem vinda do servidor
client.on('data', function(message) {
  console.log(message.toString());
});

//lendo menssagem
process.stdin.on('readable', function() {
  var message  = process.stdin.read();//message irá ler o input
  if(!message) return; //null será ignorado
  message = message.toString().replace(/\n/,'');//converte para string e substitui /n por ''
  client.write(message);//envia menssagem
});
