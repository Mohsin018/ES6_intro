// const poem = 'aam pata jora jora' +
//  'marbo chabuk'

//backtic for multiple line string

const poem = `aam pata jora jora
marbo cabuk corbe ghore
ore bubu sore dara
asche amar pagla ghora`

console.log(poem);


function sum(num1, num2){
    const result = num1 + num2;
    // const output = 'sum of ' + num1 + ' and ' + num2 + ' is equal to ' + result;
    
    // const output = `sum of ${num1} and ${num2}` or
    const output = `sum of ${num1*2} and ${num2} is equal to ${result}`

    console.log(output); 
}

sum(10, 20);

/**
 *  `this is call template string`
 *  ${this is called dynamic string used to show or calculate number}
 */


const price = 100;
const discountedPrice = `Discounted price of ${price} is after 20% discount ${price * 0.8}`
console.log(discountedPrice);