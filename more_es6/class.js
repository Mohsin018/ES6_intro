/**
 * class -> template
 * class have properties
 * class have method :- a special type of function without the function keyword
 * 
 * 
 * 
 * 
 * 
 * object
 */


// Class declaration
// class Player {}

class Player {

    constructor(name, location){
        this.name = name;
        this.location = location;
        // console.log(name, location)

    }

    goal(){
        console.log('score a goal')
    }
    getTeamName(){
        return 'borsa'
    }
}

const player1 = new Player("Mac")
const player2 = new Player('jac', 'dhk');

console.log(player1 instanceof Player)

console.log(player2)
// player1.goal()
// console.log(player1)