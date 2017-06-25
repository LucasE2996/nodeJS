console.log(module.exports === exports); //true
console.log(module.exports === this); //true
console.log(exports === this); //true
//o que tem a palavra final sempre é o 'exports'
//ele irá sobreescrever o 'this' e o 'module.exports'

//arguments contém as linhas de código usadas no módulo do Nodejs
console.log(arguments);
