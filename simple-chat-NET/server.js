//carregando core-module 'net'
const net = require('net');

//vetor com todas as conexões
var connections = [];

//faz a menssagem ecoar para todos os clientes
var broadcast = function(message, origin) {
  connections.forEach( function (connection) {
    if (connection === origin) return;//ignora a conexão origem da menssagem
    connection.write(message);//escreve a menssagem
  });
};

//criando um servidor
const server = net.createServer( function (connection) {
  connections.push(connection);
  //ao se conectar a um cliente, o servidor manda uma messagem
  connection.write("You are connected!");

  //recebendo uma menssagem do cliente:
  connection.on('data', function(message){
    var command = message.toString();//identifica um comando do cliente
    if (command.indexOf('/nickname') === 0) {//para comando nickname:
      var nickname = command.replace('/nickname ', '');
      broadcast(connection.nickname + ' is now ' + nickname);
      connection.nickname = nickname;//define o nickname
      return;
    }
    //connection será a origem
    //connection.nickname será prefixado nas menssagens
    broadcast(connection.nickname + ' > ' + message, connection);
  });

  connection.on('end', function () {
    broadcast(connection.nickname + ' has left!', connection);
    connections.splice(connections.indexOf(connection), 1);
  });

});

//to open on port 3000
server.listen(3000); //recebe a porta como parâmetro

//to open on a random port
// server.listen(() => {
//   console.log('opened server on', server.address());
// });
