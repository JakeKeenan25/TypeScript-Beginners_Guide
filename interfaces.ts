export interface Person {
	firstName: string;
	secondName: string;
	age?: number;
}

const peep1 = {
	firstName: 'Jake',
	secondName: 'Keenan',
	age: 26
}

const peep2 = {
	firstName: 'Liam',
	secondName: 'Keenan',
}

export const fullName = (person:Person) => {
	// if statment inside the string lateral
	console.log(`${person.firstName} ${person.secondName} ${!person.age ? '':person.age}`);
}

fullName(peep1);
fullName(peep2);