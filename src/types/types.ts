//The primitives, 선언 방법
const str:string = "Helllo"; // string - 문자열, "" 로 감싸서 표현, "10" <- 문자열
const num:number = 10; //number - 숫자, int, double 등 세부 타입은 없음
const bool:boolean = true; // boolean - 논리, true / false 

console.log(str.length); // 5
console.log(str.toUpperCase()); // HELLO

// String, Number, Boolean는 타입 명시법과 다르니 주의 ! <-대문자가 섞인 타입들은 내장 함수다
const wrapperStr = new String(num); 
// 형변환 활 때 

// Array 
//----- 배열의 초기화 방법
let array0fNumbers1: number[];
array0fNumbers1 = [5];
array0fNumbers1 = [5,10,30];
// [5], [5,5,10,30] xxx
// [5,10,30]

console.log(array0fNumbers1[0]); // 5
console.log(array0fNumbers1[1]); // 10
console.log(array0fNumbers1[2]); // 30

let array0fNumbers2: Array<number>;
array0fNumbers2 = [6];
array0fNumbers2 = [6,8,20];
console.log(array0fNumbers2[2]); // 

// //해당 타입 요소만 허용 되는 배열 = 튜플이므로 선언 주의
// let singleNumberTuple: [number];
// singleNumberTuple = [5]; 
// // singleNumberTuple = ["5"]; <- X  

//함수의 명시적 타입 지정 방법 (매개변수 / Parameter)
function greeter(name:string): string{
    return "Hello," + name;
}
console.log(greeter("Tom"));


// 객체 타입
const car = {
    color:'red',
    model: 'Sedan',
    manufacturer: 'Toyota',
}

console.log(car.color);

//구분자를 , 또는 ; 로 사용할 수 있음
function printOutput(pt: {x: number, y:number}){ 
    console.log("The X value is: "+pt.x);
    console.log("The Y value is: "+pt.y);
}

//객체의 선택적 속성 지정 방법 
function printName(user: {first: string, last:string}){
    if (user.last != undefined){ // 없지않은 경우 = 있음
        console.log("Your First name is " + user.first.toUpperCase());
        console.log("Your Last name is " + user.last.toUpperCase());
    } else{
        console.log("Yourname is " + user.first.toLowerCase());
    }
}

printName({ first: "Bob", last: "Chris"});

//만약 하나의 변수만 받고 싶다면?
// function printName(user: {first: string, last?:string}){
//     if (user.last != undefined){ // 없지않은 경우 = 있음
//         console.log("Your First name is " + user.first.toUpperCase());
//         console.log("Your Last name is " + user.last.toUpperCase());
//     } else{
//         console.log("Yourname is " + user.first.toLowerCase());
//     }
// }

// printName({ first: "Bob"});

//Any 타입
let object: any = {x:0};

object.foo();
object();
object.bar = 100;
object = "hello";
const n: number = object;

//Union 타입
function printId(id:number | string ){ // | <- or 라는 뜻
    // console.log(id.toUpperCase()); <-이 경우에는 오류가 뜸
    if(typeof id === "string"){
        console.log(id.toUpperCase());
    }else {
        console.log(typeof id);

    }
}
printId(10);
printId("Hello");
// 타입 별칭으로도 Union 같이 다른 타입들도 커스텀 가능\
type ID = number | string 

// Type Alias & Interface
function printCoord(point: {x: number, y: number}){
    console.log("The coordinate's x vlaue is" + point.x);
    console.log("The coordinate's y vlaue is" + point.y);
}

printCoord({x:100, y:100});
//해당 객체의 속성이 같다면,, 하지만 파라미터가 point 1,2,3....235까지 늘어난다면 계속해서 중복 코드가 늘어남

//사용자 정의 타입을 사용 할 수 있음
// type Point = {
//     x: number,
//     y: number
// }

//예시
function calculateDistance(point1:Point, point2: Point ):number{
    const locationX = point2.x-point1.x;
    const locationY = point2.y - point2.y;
    return Math.sqrt(locationX **2 + locationY** 2)
}

interface Point {
    x: number,
    y: number
}

//개방 폐쇄 원칙에 유리하다라고 했기 때문에
//예시

// interface Animal{
//     name:string;
// }

// interface Bear extends Animal{
//     honey: boolean;
// }

// function getBear(): Bear{
//     return {
//         name:"Grizzly",
//         honey:true,
//     };
// }

// const bear = getBear()
// console.log(bear.name) // from Animal
// console.log(bear.honey) 

//Type Alias의 확장 예시
// type Animal = {
//     name:string;
// }
// type Bear = Animal &{
//     honey:boolean;
// }

// function getBear(): Bear{
//     return {
//         name:"Grizzly",
//         honey:true,
//     };
// }

// const bear = getBear()
// console.log(bear.name) // from Animal
// console.log(bear.honey) 

//인터페이스 병합의 차이점
interface Job{ //interface 대신 type 을 사용한다면 중복 코드 오류가 발생
    title:string;

}
interface Job{
    company: string;
}

const myJob: Job = {
    title: "SW Engineer",
    company: "Tech"
}

//타입 단언 Type Assertions
const apiResponse: any = {
    id:1,
    title: "TypeScript Begins",
    content: "This is contents of Article",
}

// //Error 지만 찾지 하는 경우(any)
// console.log(apiResponse.like);

interface Content{
    id:number;
    title:string;
    content:string;
}

//Type assertions using 'as' keyword
const content1 = apiResponse as Content;
//Type assertions using <> bracket synatx
const content2 = <Content>apiResponse;


console.log(content2.title); //like does not exist
console.log(content2.id); // OK

//리터럴 타입: 특정 값을 타입으로 사용 하는 것 
function printText(s: string, alignment: "left" | "right" | "center"){ // left, right, center 각각이 다 타입
    //...
}
printText("Hello, world", "left");
// printText("Hello, world", "centre"); // 특정 값을 타입화 하는 것이지만, 재사용성이 떨어져서 다음으로 대체한다




//Enum 열거형 타입 사용
//진행 상태 -start/progress/end와 같이 3개를 status라는 이름으로 묶는 것
function checkDayType(): void {
    const currentDay = new Date().getDay();

    const isWorkoutDay = currentDay === Day.Tuesday || currentDay === Day.Thursday;
    const isWeekend = currentDay === Day.Sunday || currentDay === Day.Saturday;

    const isWorkingDay = 
        currentDay !== Day.Sunday && currentDay !== Day.Saturday &&
        currentDay !== Day.Monday && currentDay !== Day.Wednesday;

    console.log(`Today is day number ${currentDay}.`);
    console.log(`Is today a workout day? ${isWorkoutDay}.`);
    console.log(`Is today a weekend day? ${isWeekend}.`);
    console.log(`Is today a working day? ${isWorkingDay}.`);
}
//과연 각 숫자들의 의미는 정확히 무엇인지는 불확실하다.
enum Day{ //열거형 타입
    Sunday = 0,
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6,
}

//상태나 종류를 구분하는데 많이 사용됨.

