class Passenger{
    constructor(name, passportNumber, seatNumber){
        this.name = name
        this.passportNumber = passportNumber
        this.seatNumber = seatNumber
        this.bags = []
    }

    /**
     * 
     * @param {} bag 
     */
    addBag(bag){
        this.bags.push(bag)
    }
}

// const Dan = new Passenger("Dan", 123, 12)
// Dan.addBag(23)
// console.log(Dan.bags)

module.exports = Passenger