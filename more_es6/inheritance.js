// class Animal {
//     constructor (name, age){
//         this.name = name;
//         this.age = age;
//     }
// }

//boss class
class Animal {
    constructor (name, age){
        this.name = name;
        this.age = age;
    }

    eat(){
        console.log(`${this.name} is eating`)
    }
}



class Dog extends Animal {
    constructor(name, breed, age){
        super(name, age)
        this.breed = breed;
    }

    

    bark(){
        console.log(`${this.name} is barking`)
    }
}

const dog1 = new Dog('coffee', 'deshi', 6)
dog1.eat()
console.log(dog1)



// class Dog {
//     constructor(name, breed){
//         this.name = name;
//         this.breed = breed;
//     }

//     eat(){
//         console.log(`${this.name} is eating`)
//     }

//     bark(){
//         console.log(`${this.name} is barking`)
//     }
// }

// const dog1 = new Dog('coffee', 'deshi')
// dog1.eat()





class Cat extends Animal {
    constructor(name, color, age){
        super(name, age)
        this.color = color;
    }


    meow(){
        console.log(`${this.name} is meowing`)
    }
}

const cat1 = new Cat('sp', 'blue', 5)
cat1.eat()
// class Cat {
//     constructor(name, color, age){
//         this.name = name;
//         this.age = age;
//         this.color = color;
//     }

//     eat(){
//         console.log(`${this.name} is eating`)
//     }

//     meow(){
//         console.log(`${this.name} is meowing`)
//     }
// }

// const cat1 = new Cat('sp', 'blue', 5)
// cat1.eat()




class Bird extends Animal{
    constructor(name, color, age){
        super(name,age)
        this.color = color;
    }


    fly(){
        console.log(`${this.name} is flying`)
    }
}

const bird1 = new Bird('eagle', 'gray', 5)
bird1.eat()
// class Bird {
//     constructor(name, color, age){
//         this.name = name;
//         this.age = age;
//         this.color = color;
//     }

//     eat(){
//         console.log(`${this.name} is eating`)
//     }

//     fly(){
//         console.log(`${this.name} is flying`)
//     }
// }

// const bird1 = new Bird('eagle', 'gray', 5)
// bird1.eat()