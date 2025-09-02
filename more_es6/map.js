//if return needed use map
const numbers = [4, 8, 2, 3, 5]

// const doubled = []

// for(const num of numbers){
//     const result = num*2
//     doubled.push(result);

// }

// const doubleIt = x => x*2;
// const doubled = numbers.map(doubleIt)

const doubleIt = x => x*2;
const doubled = numbers.map(x => x * 2);

const fiveTimes = numbers.map(num => num*5);
const squared = numbers.map(num => num * num)


console.log(squared);



const friends = ['zaved', 'pabel', 'nobel', 'rasel', 'mahel']

const nameLengths = friends.map(name => name.length)
const firstLetters = friends.map(name => name[0].toUpperCase())
const result = numbers.map((num, index) => {
    console.log(num*index);
    return index;

})

console.log(nameLengths)