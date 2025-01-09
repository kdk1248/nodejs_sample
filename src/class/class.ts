//Class 이용 
class Robot{ // Members
    //Property 또는 Field(속성, 필드)
    private name:string;
    private model:string ;
    private status:string = "Active" ; 

    //Constructor(생성자)
    constructor(name:string, model: string){
        this.name = name;
        this.model = model;
    };
    //Get for name
    public getName(): string {
        return this.name;
    }
    public getModel(): string {
        return this.model;
    }
    public getStatus(): string {
        return this.status;
    }

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
console.log(r1.getName);
console.log(r2.getModel);
console.log(r3.getStatus);

r1.performTask("Charging");
r2.performTask("Exploring");
r3.updateStatus("On Repair");

//No-args Constructor
class Pet{
    category: string = "Cat";
    name: string = "Chu";

    //기본 생성자(작성 안해도 숨어있다)
    // constructor(){}
}
let p1 = new Pet();
console.log(p1.name);

class User{
    //필드 부분
    username:string; //타이반을 표기하는 경우
    email:string; 
    job:string = "Student"; //기본값을 주는 경우

    //[생성자 부분]
    constructor(username: string, email: string){
        this.username = username;
        this.email=email;
    }
    //[메서드 부분]
    study(): void{
        console.log(`${this.username} is studying`);
    }
}

//[객체 생성] (new 키워드와 arguments 입력)
let user1 = new User("홍길동", "hong@naver.d0t");
let user2 = new User("김철수", "kim@ex.com");

//[객체의 사용,접근] (.도트연산자 사용)
//1. 인스턴스 자체 접근
console.log(user1) //출력: User{username: '홍길동', email:'...'}
//2. 인스턴스의 세부 필드 접근
console.log(user2.username); // 출력 김철수
//3. 메서드 호출
user1.study();
user2.study();


//클래스의 상속
class CleaningRobot extends Robot{ // Members
    cleaningSchedule: string[];
    // private status:string = "Active" ; 

    //Constructor(생성자)
    constructor(name:string, model: string, cleaningSchedule: string[]){
        super(name,model)
        this.cleaningSchedule = cleaningSchedule;
    };

    // performCleaning(){
    //     console.log(`${this.name} is cleaning according to the schedul ${this.cleaningSchedule.join(",")}.`)
    // }
    override performTask(){ //override <-재정의의 개념, 자동으로 실행되니까 생략 가능 , overroad<- 새 것의 개념
        console.log(`${this.getName} is cleaning according to the schedul ${this.cleaningSchedule.join(",")}.`)
    }
}
class CookingRobot{ // Members
    //Property 또는 Field(속성, 필드)
    name:string;
    model:string ;
    availableMenus: string[];
    status:string = "Active" ; 

    //Constructor(생성자)
    constructor(name:string, model: string, availableMenus: string[]){
        this.name = name;
        this.model = model;
        this.availableMenus = availableMenus;
    };

    //Method(행동)
    performTask(task: string){
        console.log(`${this.name} is performing ${task}.`);
    };

    updateStatus(newStatus: string) {
        this.status = newStatus;
        console.log(`${this.name}'s status is now ${this.status}`);
    };

    performCooking(){
        console.log(`${this.name} is cooking according to the menus ${this.availableMenus.join(",")}.`)
    }
}


//접근 제어자 Visivility Modifier / Access Modifier
//public - protected - default - private (x)
//(default)
//public: 모든 클래스에서 접근 가능(기본값)
//protected: 같은 클래스와 자식 클래스에서 접근 가능
//private: 해당  클래스에서만 접근 가능

let c1 = new CleaningRobot("ABC-1", "Prime", ["sun", "mon"])
console.log(c1.cleaningSchedule)
c1.performTask();
console.log(c1.getName());


//Interface
interface UserDTO{
    id:number;
    name:string;
    email:string;
    createAt: Date;
}

// API 응답 형태를 정의하는 경우엔
interface ApiResponse {
    succcess: boolean;
    data?: UserDTO;
    message?: string;

}