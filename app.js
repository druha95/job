function Animal () {}

Animal.prototype.getName = function(){
	return this.name;
}

function Cat(name) {
	this.name = name;	
}


Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.meow = function() {
		return 'Cat '+ this.name + ' is saying meow';
	}

var cat = new Cat("garfield");

alert(cat.getName() === 'garfield');
alert(cat.meow());

