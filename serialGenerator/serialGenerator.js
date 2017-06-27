var max = 10000;

var generate = function(){
	return Math.floor(Math.random() * max);
}

module.exports = {
	generate: generate
};