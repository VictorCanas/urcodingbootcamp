function Animal (raining, noise) {
	this.raining = raining;
	this.noise = noise;
	this.makeNoise = function() {
		if (this.raining) {
			console.log(this.noise)
		}
	}
}

var dogs = new Animal(true, 'Woof!');
var cats = new Animal(false, 'Meow!');
var catsOnBrodway = new Animal (true, "singing");

dogs.makeNoise()
cats.raining = true;