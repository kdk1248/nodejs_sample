// Generics

//Echo Command
//아래와 같이 각 타입별 메서드를 구현한다면, 너무 많은  메서드를 정의해야 한다
function identity(arg:number): number{ //변수 타입도 number, 반환 타입도 number 이기 때문에 return도 써줌
    return arg; 
}

function identity2(arg:string): string{ 
    return arg; 
}

function identity3(arg:boolean): boolean{ 
    return arg; 
}

// //잘못하여 any 타입을 사용한다면, 타입 검증의 목적을 달성하기 어려움
// function identity(arg:any): any{ 
// //..
// arg = "10";
// //..
//     return arg; 
// }

let arg =10;
identity(arg);


//비효율적인 코드 해겨 ㄼ망법
//Use Generics
// function indentityWithGenerics<Type>(arg: Type):Type{
//     return arg;
// }
//Use Generics general version"T"
function indentityWithGenerics2 <T>(arg: T):T{
    return arg;
}
//Use Generics multiple version"T"+"U"
function indentityWithGenerics3 <T, U>(arg: T, arg2: U):[T, U]{
    return [arg,arg2];
}

//Type 이라는 키워드가 해당 함수 내에 동일한 키워드들을 통일시킴
let input = "10";
const result = indentityWithGenerics(input);
console.log("type of input :" + typeof input);
console.log("type of result :" + typeof result);
console.log("result of use generics:" + result);

const result2 = indentityWithGenerics3(20, "Hello");
console.log(result2);

//아래의 3개의 절에는 패턴이 있음 , 가독성을 위함
//간단 테스트 패턴 연습
function indentityWithGenerics<Type>(arg: Type):Type{
    return arg;
}
function isNumber(value: any){
    return typeof value === 'number' && !isNaN(value);
}
function isstring(value: any){
    return typeof value === 'string';
} // 여기서는 검증을 하지 않겠따


//given - 테스트에 필요한 초기 데이터를 설정 -> Mock 모의객체를 만들어서 사용하게 된다.
const testValue1: number = 20;
const testValue2: string = "Hi";
const testValue3: number[] = [1,2];


//when1 - 테스트를 실행하는 부분
const numberIdentity = indentityWithGenerics(testValue1);

//then1 - 결과를 검증하고 출력하는 부분 
console.log(`Input type is: ${typeof testValue1}`);
console.log(`Output type is: ${typeof numberIdentity}`);
console.log(`Is number type is: ${isNumber(numberIdentity)}`);//true

//when2
const stringIdentity = indentityWithGenerics(testValue2);

//then2 
console.log(`Input type is: ${typeof testValue2}`);
console.log(`Output type is: ${typeof stringIdentity}`);
console.log(`Is string type is: ${isstring(stringIdentity)}`); //true

//when2
const arrayIdentity = indentityWithGenerics(testValue3);

//then2 
console.log(`Input type is: ${typeof testValue3}`);
console.log(`Output type is: ${typeof arrayIdentity}`);
console.log(`Is array type is: ${Array.isArray(arrayIdentity)}`);//true