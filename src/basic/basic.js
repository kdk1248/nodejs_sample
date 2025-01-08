const message = "Hello!";
message.toLowerCase();
message();


const value = Math.random() < 0.5 ? "a" : "b"; //삼항연산자 true : false
if(value !== "a"){
    //..
}else if (value === "b"){
    //Oops, unreachalbe
}


function flipCoin(){
    //Meant to be Math.random()
    return Math.random < 0.5;
}