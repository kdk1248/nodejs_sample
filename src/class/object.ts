//Pure JS(Vanilia JS) : Object only -> PRotype-based programing

//object
let robot = { // Members
    //Propertu(속성)
    name: "R2-D2",
    model: "AstroMech",
    status: "Active",

    //Method(행동)
    PerformTask: function (task: string){
        console.log(`${this.name} is performing ${task}.`);
    },
    updateStatus: function(newStatus: string){
        this.status = newStatus;
        console.log(`${this.name}s status sis no ${this.status}`)
    }
}
let robot2 = { // Members
    //Propertu(속성)
    name: "A2-D2",
    model: "proto",
    status: "Active",

    //Method(행동)
    PerformTask: function (task: string){
        console.log(`${this.name} is performing ${task}.`);
    },
    updateStatus: function(newStatus: string){
        this.status = newStatus;
        console.log(`${this.name}s status sis no ${this.status}`)
    }
}
let robot3 = { // Members
    //Propertu(속성)
    name: "A1-B2",
    model: "AD-22",
    status: "InActive",

    //Method(행동)
    PerformTask: function (task: string){
        console.log(`${this.name} is performing ${task}.`);
    },
    updateStatus: function(newStatus: string){
        this.status = newStatus;
        console.log(`${this.name}s status sis no ${this.status}`)
    }
}

// usage with "." dot operactor
console.log(robot.name) // Accessing Property
robot.PerformTask("Getting ready to move") //Calling Method

//추가와 수정에 비효율적임 