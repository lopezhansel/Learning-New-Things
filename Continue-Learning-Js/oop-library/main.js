// Problem :  Create a modular library using OOP
;(function(){
	var root  = global || window;
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

    root.h = h;
})();

var person1 = h("hasnel","lopez",40,40);
console.log(person1);