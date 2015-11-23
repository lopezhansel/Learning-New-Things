// Create a Event Listener Constructor
// Creates a new object with a property call events which is an object
function Emitter () {
	this.events = {};
}

// on()  
 
Emitter.prototype.on = function  (name,listner) {
	// takes a name and makes a property on events 
	// and ties an array to the name
	this.events[name] = this.events[name] || [];
	// listener are supposed to be functions being passed 
	this.events[name].push(listner);
};

Emitter.prototype.emit = function  (name) {
	// make sure name exist on events
	if ( this.events[name]){
		// run function when emits
		this.events[name].forEach(function (listner) {
			listner();
		});
	}
};
module.exports =  Emitter;