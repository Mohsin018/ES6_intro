const numbers  = [2, 3, 4, 5, 6]
for(const num of numbers){
    console.log(num);
}


// for in for looping the object

const employee = {
    name: 'Raja',
    designation: 'QA',
    Salary: 20000,
    experience: 1,
    age: 22
}

for(const key in employee){
    const value = employee[key];
    console.log(key, value);
}



const keys = Object.keys(employee)
for(const key of keys){
    const value = employee[key]
    console.log(value);
}
