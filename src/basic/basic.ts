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