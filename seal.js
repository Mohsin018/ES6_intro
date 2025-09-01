const employee = {
    name: 'Raja',
    designation: 'QA',
    Salary: 20000,
    experience: 1,
    age: 22
}

//to prevent the add and delete of object we have to use seal. But  we can update the object keys values.
Object.seal(employee);

//to delete from object 

delete employee.age


//to change the value of keys

employee.Salary = employee.Salary + 5000;

//add new key in object

employee.location = 'Ctg';


