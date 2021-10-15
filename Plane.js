const Passenger = require("./Passenger")

class Plane{
    
    constructor(typeOfPlane){
        this.typeOfPlane = typeOfPlane
        this.passengers = []
    }

    addPassenger(Person){  
        this.passengers.push(Person)
    }

    

}
module.exports = Plane