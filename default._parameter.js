function sum(num1, num2){
    const total = num1 + num2;
    console.log(total)
}

sum(5, 10);

//it will take only the first two

function sum(num1, num2){
    const total = num1 + num2;
    console.log(total)
}

sum(5, 10, 78, 80);


// it will take 10 and 0 and do the sum because other one is not given
function sum(num1, num2=0){
    const total = num1 + num2;
    console.log(total)
}

sum(10);

/**
 * Some thumb rule of default value. maybe useful
 * 
 * when multiply use one 1 as default value otherwise use 0
 * add, sub ---> 0
 * multiply ---> 1
 * boolean --->
 * string ---> ''
 * 
 * array---> []
 */


function multiply(num1, num2=1){
    const total = num1 * num2;
    console.log(total)
}

multiply(10);

