//ACESSO PRIVADO
var max = 10000;
//module.export É UM MODULO QUE PODE SER ACESSADO POR TODOS NO DIRETORIO ATUAL
module.exports.generate = function () {
  return Math.floor(Math.random() * max);
};
//SOMENTE COM EXPORTS DA NO MESMO
// exports.generate = function () {
//   return Math.floor(Math.random() * max);
// };
//SOMENTE COM THIS DA NO MESMO
// this.generate = function () {
//   return Math.floor(Math.random() * max);
// };
