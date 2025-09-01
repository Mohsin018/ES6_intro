//nested object
const student = {
    name: 'rafid',
    1: 50,
    family: {
        title: 'gazi',
        // mother: {
        //     name: 'noorjahan',
        //     age: 45
        // }
    },

    "home-address": 'kochu khet',
    marks: 90
}


console.log(student.family.title)


console.log(student.family.mother?.age)

//optional chain
console.log(student.family.mother?.age)