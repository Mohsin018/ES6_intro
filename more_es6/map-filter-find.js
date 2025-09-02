const students = [
    {id: 1, name: 'abc', marks: 50},
    {id: 2, name: 'bcd', marks: 60},
    {id: 3, name: 'cde', marks: 70},
    {id: 4, name: 'def', marks: 80}
]


const names = students.map(student => student.name)
const goodStudents = students.filter(student => student.marks > 60)
const goodStudent = students.find(student => student.marks > 70)

console.log(names);
console.log(goodStudents);
