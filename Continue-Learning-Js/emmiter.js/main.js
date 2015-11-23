var Emitter = require("./emitter");

var emtr = new Emitter();


emtr.on("greet",function  () {
	console.log("Hello There");
});

emtr.on("greet",function  () {
	console.log("Wut Wut Yeah Yeah");
});


emtr.emit("greet"); 