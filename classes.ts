export{}

// Public: Freely accessible.
// Private: Only accessible from class.
// Protected: Only accessible from class and classes derived from it.

class Employee {
	protected employeeName: string;

	constructor(name:string){
		this.employeeName = name;
	}

	greet(){
		console.log(`Good Morning ${this.employeeName}`)
	}
}

class Manger extends Employee {
	private managerID = 0;
	constructor(managerName: string, managerID:number = 0){
		super(managerName);
		this.managerID = managerID;
	}

	getManagerID(){
		console.log(`Name:${this.employeeName}, Manager ID:${this.managerID}`);
	}
}

const emp1 = new Employee("Liam");
emp1.greet();

const mngr1 = new Manger("Jake", 25);
mngr1.greet();
mngr1.getManagerID();

const mngr2 = new Manger("Hannah");
mngr2.greet();
mngr2.getManagerID();

