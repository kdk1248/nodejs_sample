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