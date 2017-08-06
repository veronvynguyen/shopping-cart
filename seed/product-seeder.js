var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var products = [
	new Product({
		imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png', 
		title: 'Gothic 5 Video Game',
		description: 'Awesome Game!!!!',
		price: 10
	}),
	new Product({
		imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png', 
		title: 'Gothic 4 Video Game',
		description: 'Also Awesome Game!!!!',
		price: 20
	}),
	new Product({
		imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png', 
		title: 'Gothic 3 Video Game',
		description: 'best game ever!!!!',
		price: 15
	}),
	new Product({
		imagePath: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png', 
		title: 'Gothic 2 Video Game',
		description: 'top notch!!!',
		price: 50
	})
];

var done = 0;
for (var i = 0; i < products.length; i++) {
	products[i].save(function(err, result){
		done++;
		if (done === products.length) {
			exit();
		}
	});
}

function exit() {
	mongoose.disconnect();
}