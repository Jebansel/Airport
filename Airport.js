class Airport{
    constructor (nameOfAirport){
        this.nameOfAirport = nameOfAirport
        this.listOfPlanes = []
    }


addPlane(plane){
    this.listOfPlanes.push(plane)
}
}


module.exports = Airport