// Problem : take a CSV file and convert into json

var fs = require('fs');

// read csv file and make string output
var output = fs.readFileSync("data.csv",'utf8')
	// make array of lines and trim extra space after form string
	.trim() 
	.split('\r\n')
	// make new arr of array by splitting each line by commas
	.map(line => line.split(','))
	// reduce each line and return and object
	.reduce((customers, line) => {
		// only one property per customer
		customers[line[0]] = customers[line[0]] || []
		// push into customer array each product
		customers[line[0]].push({
			name: line[1],
			price: line[2],
			quantaity : line[3]
		})
		return customers;
	},{});

// JSON.stringify(output,null,2) the #2 parameter is space indentation
console.log(JSON.stringify(output,null,2));