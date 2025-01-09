//Class 이용 
class Robot{ // Members
    //Property 또는 Field(속성, 필드)
    name:string;
    model:string ;
    status:string = "Active" ;

    //Constructor(생성자)
    constructor(name:string, model: string){
        this.name = name;
        this.model = model;
    };

    //Method(행동)
    performTask(task: string){
        console.log(`${this.name} is performing ${task}.`);
    };

    updateStatus(newStatus: string) {
        this.status = newStatus;
        console.log(`${this.name}'s status is now ${this.status}`);
    };
}

//Create Instance of the Robot
let r1 = new Robot("By2", "HI")
let r2 = new Robot("By3", "He")
let r3 = new Robot("By4", "Ho")

//Acessing properties an Calling method
console.log(r1.name);
console.log(r2.model);
console.log(r3.status);

r1.performTask("Charging");
r2.performTask("Exploring");
r3.updateStatus("On Repair");
