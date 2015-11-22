// Problem :  Create a modular library using OOP
// This library creates Person objects with coordinates. You can call methods on each person allowing them to move North, East, South, and West

;(function(){

	// This is from underscore.js
	// Establish the root object, `window` (`self`) in the browser, `global`
	// on the server, or `this` in some virtual machines. We use `self`
	// instead of `window` for `WebWorker` support.
	var root = typeof self == 'object' && self.self === self && self ||
    	typeof global == 'object' && global.global === global && global ||
        this;

	// Inspired from jQuery to create Objects
	var explorer = function(firstName,lastName,lat,lng){
		return new explorer.init(firstName,lastName,lat,lng);
	};

    // Here is the function constructor allowing me to not use  the"new" keyword
    explorer.init = function(firstName, lastName, lat,lng) {
    	if(typeof lng !== "number" ) { throw "Expected a Number and got " + lng;}
    	if(typeof lat !== "number" ) { throw "Expected a Number and got " + lat;}
    	if(typeof firstName !== "string" ) { throw "Expected a Number and got " + firstName;}
    	if(typeof lastName !== "string" ) { throw "Expected a Number and got " + lastName;}

        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.lat = lat || 0;
        self.lng = lng || 0;
        self.appart = 0;
    };

    // methods to move user up or down the latitude and left and right the longitude
    // you can chain these as well
    explorer.prototype = {
    	isNum : function (num) {
    		if(typeof num !== "number" ) { throw "Expected a Number and got " + num;}
    	},
    	moveNorth : function (num){
    		this.isNum(num);
    		// If you're at the North pole you can't go anymore north. 
    		// you will start going south
    		if(this.lat + num > 90){
    			this.lat = 90 - (this.lat + num) % 90;
    			this.lng += 180;
	    		if(this.lng > 180){ this.lng -= 360;}
    		} else { 
	    		this.lat += num;
	    	}
    		return this;
    	},
    	moveSouth : function (num) {
    		this.isNum(num);
    		// If you're at the south pole you can't go anymore south.
    		// you will start going North
    		if(this.lat - num < -90){ 
    			this.lat = (90 + (this.lat - num) % 90)*-1;
    			this.lng += 180;
	    		if(this.lng > 180){ this.lng -= 360;}
    		} else { 
    			// otherwise continue going south
	    		this.lat -= num ;
    		}
    		return this;
    	},
    	moveWest : function (num) {
    		this.isNum(num);
    		this.lng -= num;
    		// if you go past -180 you start at 180
    		if(this.lng < -180){ this.lng += 360;}
    		return this;
    	},
    	moveEast : function (num) {
    		this.isNum(num);
    		this.lng += num;
    		// if you go past 180 you start at -180
    		if(this.lng > 180){ this.lng -= 360;}
    		return this;
    	},
    	log : function  () {
    		console.log(this);
    		return this;
    	}
    };

    // tying  initializers prototype to the explorer prototype
    explorer.init.prototype = explorer.prototype;

    // tie explorer to the global object in the execution context
    root.explorer = explorer;
})();


// instantiating person
var person1 = explorer("hasnel","lopez",-88,40);

// method chaining 
person1.moveNorth(10).moveEast(5).moveEast(50).moveNorth(10).log();

