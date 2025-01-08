//The primitives, 선언 방법
const str:string = "Helllo"; // string - 문자열, "" 로 감싸서 표현, "10" <- 문자열
const num:number = 10; //number - 숫자, int, double 등 세부 타입은 없음
const bool:boolean = true; // boolean - 논리, true / false 

console.log(str.length); // 5
console.log(str.toUpperCase()); // HELLO

// String, Number, Boolean는 타입 명시법과 다르니 주의 ! <-대문자가 섞인 타입들은 내장 함수다
const wrapperStr = new String(num); 
// 형변환 활 때 