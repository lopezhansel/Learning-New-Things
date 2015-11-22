// Problem: Attempt to do method chaining style but using functional programing
// Note: this is not an OOP STYLE

;(function(){
	
	// This is from underscore.js
	// Establish the root object, `window` (`self`) in the browser, `global`
	// on the server, or `this` in some virtual machines. We use `self`
	// instead of `window` for `WebWorker` support.
	 var root = typeof self == 'object' && self.self === self && self ||
            typeof global == 'object' && global.global === global && global ||
            this;


	// tie to global object in the global execution context 
	root.h = function  () {};

	// chain allows me chain many functions to a inputString
	h.chain = function (inputString) {

		// prevent error with other objects
		if (typeof inputString !== 'string') { throw "You need to input a string";}

		var fnsArray = Array.prototype.slice.call(arguments ,1);

		//  call each array and pass in the string 
		var ouput =  fnsArray.reduce(function (string, fns) {
			return h[fns].call(string);
		},inputString);

		return ouput;
	};

	// Functional programing type of functions
	h.upper = function () {
		return this.toUpperCase();
	};
	h.excite = function (){
		return this + "!!!";
	};
	h.downer = function () {
		return this.toLowerCase() + "..";
	};
	h.log = function () {
		console.log(String(this));
		return String(this);
	};

})();



var person1 = {
	firstName : "micheal",
	lastName : "jordan",
};

// this will console.log and return value thanks to functional programming 
person1.fullName = h.chain(person1.firstName + " " +person1.lastName,"upper","log");


h.chain("wooo", "excite", "upper" ,"log");
