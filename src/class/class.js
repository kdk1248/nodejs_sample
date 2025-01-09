var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Class 이용 
var Robot = /** @class */ (function () {
    //Constructor(생성자)
    function Robot(name, model) {
        this.status = "Active";
        this.name = name;
        this.model = model;
    }
    ;
    //Get for name
    Robot.prototype.getName = function () {
        return this.name;
    };
    Robot.prototype.getModel = function () {
        return this.model;
    };
    Robot.prototype.getStatus = function () {
        return this.status;
    };
    //Method(행동)
    Robot.prototype.performTask = function (task) {
        console.log("".concat(this.name, " is performing ").concat(task, "."));
    };
    ;
    Robot.prototype.updateStatus = function (newStatus) {
        this.status = newStatus;
        console.log("".concat(this.name, "'s status is now ").concat(this.status));
    };
    ;
    return Robot;
}());
//Create Instance of the Robot
var r1 = new Robot("By2", "HI");
var r2 = new Robot("By3", "He");
var r3 = new Robot("By4", "Ho");
//Acessing properties an Calling method
console.log(r1.getName);
console.log(r2.getModel);
console.log(r3.getStatus);
r1.performTask("Charging");
r2.performTask("Exploring");
r3.updateStatus("On Repair");
//No-args Constructor
var Pet = /** @class */ (function () {
    function Pet() {
        this.category = "Cat";
        this.name = "Chu";
        //기본 생성자(작성 안해도 숨어있다)
        // constructor(){}
    }
    return Pet;
}());
var p1 = new Pet();
console.log(p1.name);
var User = /** @class */ (function () {
    //[생성자 부분]
    function User(username, email) {
        this.job = "Student"; //기본값을 주는 경우
        this.username = username;
        this.email = email;
    }
    //[메서드 부분]
    User.prototype.study = function () {
        console.log("".concat(this.username, " is studying"));
    };
    return User;
}());
//[객체 생성] (new 키워드와 arguments 입력)
var user1 = new User("홍길동", "hong@naver.d0t");
var user2 = new User("김철수", "kim@ex.com");
//[객체의 사용,접근] (.도트연산자 사용)
//1. 인스턴스 자체 접근
console.log(user1); //출력: User{username: '홍길동', email:'...'}
//2. 인스턴스의 세부 필드 접근
console.log(user2.username); // 출력 김철수
//3. 메서드 호출
user1.study();
user2.study();
//클래스의 상속
var CleaningRobot = /** @class */ (function (_super) {
    __extends(CleaningRobot, _super);
    // private status:string = "Active" ; 
    //Constructor(생성자)
    function CleaningRobot(name, model, cleaningSchedule) {
        var _this = _super.call(this, name, model) || this;
        _this.cleaningSchedule = cleaningSchedule;
        return _this;
    }
    ;
    // performCleaning(){
    //     console.log(`${this.name} is cleaning according to the schedul ${this.cleaningSchedule.join(",")}.`)
    // }
    CleaningRobot.prototype.performTask = function () {
        console.log("".concat(this.getName, " is cleaning according to the schedul ").concat(this.cleaningSchedule.join(","), "."));
    };
    return CleaningRobot;
}(Robot));
var CookingRobot = /** @class */ (function () {
    //Constructor(생성자)
    function CookingRobot(name, model, availableMenus) {
        this.status = "Active";
        this.name = name;
        this.model = model;
        this.availableMenus = availableMenus;
    }
    ;
    //Method(행동)
    CookingRobot.prototype.performTask = function (task) {
        console.log("".concat(this.name, " is performing ").concat(task, "."));
    };
    ;
    CookingRobot.prototype.updateStatus = function (newStatus) {
        this.status = newStatus;
        console.log("".concat(this.name, "'s status is now ").concat(this.status));
    };
    ;
    CookingRobot.prototype.performCooking = function () {
        console.log("".concat(this.name, " is cooking according to the menus ").concat(this.availableMenus.join(","), "."));
    };
    return CookingRobot;
}());
//접근 제어자 Visivility Modifier / Access Modifier
//public - protected - default - private (x)
//(default)
//public: 모든 클래스에서 접근 가능(기본값)
//protected: 같은 클래스와 자식 클래스에서 접근 가능
//private: 해당  클래스에서만 접근 가능
var c1 = new CleaningRobot("ABC-1", "Prime", ["sun", "mon"]);
console.log(c1.cleaningSchedule);
c1.performTask();
console.log(c1.getName());
