class Vehicle{
    //private variable is tin
    #tin;
    constructor(type, brand, price){
        this.type = type;
        this.price = price;
        this.brand = brand;
        this.#tin = 45899542685;
    }


    getThis (){
        console.log(this)
    }

    getTin(){
        return this.#tin
    }

    getPrice(){
        return this.price;
    }
}

const car1 = new Vehicle('car1','honda', 50000)
const car2 = new Vehicle('car2', 'toyota', 20000)
// car1.getThis() 

// car2.getPrice()

console.log(getTin())

// console.log(car2.getPrice())


const student = {
    name: 'rahu',
    score: 100,
    getScore: function(){
        console.log(this)
    },
    getScoreArrow: ()=>{
        console.log(this)
    }
}