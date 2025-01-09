const message = "Hello!";
// Accessing the property 'toLowerCase'
//on 'message'and the calling it
message.toLowerCase();
//Calling 'message'
// message();



const announcement = "Hello World!;"
// Howquickly can you sopt the typos
announcement

const value = Math.random() < 0.5 ? "a" : "b"; //삼항연산자 true : false
if(value !== "a"){
    //..
}else if (value === "a"){
    //Oops, unreachalbe
}


function flipCoin(){
    //Meant to be Math.random()
    return Math.random() < 0.5; 
}


//1. 추론저 타입 지정
let x = 3;
// x = [0,1,null]

// class Animal {}
// class Rhino extends Animal {
//     hasHorn: boolean = true;
// }

// class Elephant extends Animal {
//     hasTrunk: boolean = true;
// }

// class Snake extends Animal {
//     hasLegs: boolean = true;
// }

// let zoo = [new Rhino(), new Elephant(), new Snake()];
//
// zoo는 어떻게 구별되어야 하는가?
// Animal [] <- Animal 배열로 추론 될 것이다 그러나 각 객체의 배열로 나타남 즉 다른 타입이 지정됨
// 사실은 let zoo:Animal[] = [new Rhino(), new Elephant(), new Snake()];로 나오길 원함

//2. 명시적 타입 지정 (Explict Types, 중요하다/ ts를 사용하는 이유이기도 하다)

//This is an ndustrial-grade general-purpose greeter function:
function greet(person:string, date:Date){
    console.log(`Hello ${person}, today is ${date}!`);
}

greet("Brendan",new Date());


