const employee = {
    name: 'Raja',
    designation: 'QA',
    Salary: 20000,
    experience: 1,
    age: 22
}

//to prevent the modification and update the object we have to use freeze
Object.freeze(employee);


//to delete from object 

delete employee.age


//to change the value of keys

employee.Salary = employee.Salary + 5000;

//add new key in object

employee.location = 'Ctg';



