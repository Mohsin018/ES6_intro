//function declaration
function add(num1, num2){
    return num1 + num2;
}

add(2, 3);



//function expression

const addition = function(num1, num2){
    return num1 + num2
}

// const result = addition(7, 5);
// console.log(result);



//arrow function 
const add2 = (num1, num2) => num1 + num2
//in single line arrow function the result will be by default return
const multiply = (a, b) => a * b;
const sumAll = (a, b, c, d, e, f) => a + b + c + d + e + f;
const isFirstBig = (x, y) => x > y;

//multi line arrow function
//In multi line arrow function we have to write return

const doMath = (x, y) => {
    const makeDouble = x*2;
    const againDouble = y*2;
    const result = makeDouble + againDouble;

    return result;
}


const result = add2(7, 5);
console.log(result);

const isBig = isFirstBig(45, 12);
console.log(isBig)



