const { price, quantity, tax=7 } = { name: 'shirt', price: 500, quantity: 7}
console.log(price, quantity, tax)


//method 4
// const { price, quantity } = { name: 'shirt', price: 500, quantity: 7}
// console.log(price, quantity)



// method 3
// const { price } = { name: 'shirt', price: 500, quantity: 7}
// console.log(price)


//Method 2
// const product = { name: 'shirt', price: 500, quantity: 7}
// const discount = product.price*20/100
// const yourPay = product.price-discount;
// const vatAmount = product.price*7/100;
// const totalAmount = yourPay + vatAmount;

// method 1//
// const product = { name: 'shirt', price: 500, quantity: 7}
// const price = product.price;
// const discount = product.price*20/100
// const yourPay = product.price-discount;
// const vatAmount = product.price*7/100;
// const totalAmount = yourPay + vatAmount;


const device = {name: 'phone', brand: 'samsung', price: 17000}
const {brand} = device;



//destructuring in array

const number = [25, 55, 54, 36]
const [first, second] = number;