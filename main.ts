
/* 
	TO RUN:
	tsc main.ts or just tsc main, creates a main.js file
	Node main.js or just node main.

	Automatically watch for new code/updates in main.ts
	tsc main.--watch
 */

// Beacuse we want ts to treat this as a module,
// Allowing us to have our own scope.
export {}

{
	let msg = 'helloworld';
	console.log("msg:", msg);
}

{
	console.log("\nTypes Declarations:");
	// var isBeginner of type Boolean, initialised to true;
	let isBeginner: boolean = true;
	let msgOut: string = !isBeginner ? "I am not a typescript beginner":"I am a typescript beginner";
	// var total of type number, initialised to zero;
	let age: number = 26;
	// var name of type string, initialised to Jake;
	let name: string = 'Jake';
	// var sentence of type string, initialised to string lateral with name;
	let sentence: string = `\tMy name is ${name}, I am ${age}.${msgOut}`;
	console.log(sentence);
}

{
	// null & undefined:classified as subtypes of all other types.
	let n: null = null;
	let u: undefined = undefined;

	let isNew: boolean = null;
	let myName: string = undefined;
}

{
	console.log("\nArray Types:");
	let list1: number[] = [1,2,3];
	let list2: Array<number> = [4,5,6];
	console.log('\tlist1 :', list1);
	console.log('\tlist2 :', list2);
}

{
	console.log("\nTuples:");
	let tuples: [string, number] = ['Jake', 25];
	console.log('\ttuples :', tuples);
}

{
	console.log("\nEnums:");
	enum Color {Red = "red", Green = "green", Blue = "blue"};
	let colour: Color = Color.Green;
	console.log('\tcolour :', colour);
}

{
	console.log("\nType Any:");
	let randomValue: any = 10;
	console.log('\trandomValue :', randomValue);
	randomValue = true;
	console.log('\trandomValue :', randomValue);
	randomValue = "I changed from number, bool and now to String";
	console.log('\trandomValue :', randomValue);
}

{
	console.log("\nType Unknown:");
	let val: unknown = "hi";
	let x: string = (val as string).toUpperCase();
	console.log('\tx :', x);
}

{
	console.log("\nMultiple Types:");
	let out: number | boolean = 25;
	console.log('\tout :', out);
	out = true;
	console.log('\tout :', out);
}