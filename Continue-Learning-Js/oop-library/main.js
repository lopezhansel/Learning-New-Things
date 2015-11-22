// Problem :  Create a modular library using OOP
;(function(){

	// This is from underscore.js
	// Establish the root object, `window` (`self`) in the browser, `global`
	// on the server, or `this` in some virtual machines. We use `self`
	// instead of `window` for `WebWorker` support.
	 var root = typeof self == 'object' && self.self === self && self ||
            typeof global == 'object' && global.global === global && global ||
            this;

	// Inspired from jQuery to create Objects
	var h = function(firstName,lastName,lat,lng){
		return new h.init(firstName,lastName,lat,lng);
	};

    // Here is the function constructor allowing me to not use  the"new" keyword
    h.init = function(firstName, lastName, lat,lng) {
        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.lat = lat || 0;
        self.lng = lng || 0;
        self.appart = 0;
    };

    // methods to move user up or down the latitude
    h.prototype = {
    	moveUp : function (){
    		this.lat +=  1;
    		return this;
    	},
    	moveDown : function  () {
    		this.lat += -1 ;
    	},

    };

    // tying  initializers prototype to the h prototype
    h.init.prototype = h.prototype;

    // h for hansel :)
    root.h = h;
})();


var person1 = h("hasnel","lopez",40,40);

person1.moveUp();
person1.moveUp();
person1.moveUp();
person1.moveDown();

console.log(person1);