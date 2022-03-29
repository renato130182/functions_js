function calcAge(years) {
	return `In ${years} years, ${this.name} will be ${
		this.age + years
	} years old.`;
}

const personJoao = {
	name: 'João',
	age: 25,
};

const personMaria = {
	name: 'Maria',
	age: 10,
};

const personJhon = {
	name: 'Jhon',
	age: 33,
};

const animal ={
    name: 'Caco',
    age: 1,
    breed: 'Bulldog'
}

console.log(calcAge.call(personJoao, 40));
console.log(calcAge.apply(personMaria, [24]));
console.log(calcAge.call(animal,5));