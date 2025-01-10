//4 basic operating funtions
function add(a: number, b: number): number{
    return a+b;
}
function substract(a: number, b: number): number{
    return a-b;
}
function multiply(a: number, b: number): number{
    return a*b;
}
function divide(a: number, b: number): number{
    return a/b;
}

export {add, substract, multiply, divide}

//일부만 내보내고 싶을 때
export function add1(a: number, b: number): number{
    return a+b;
}

