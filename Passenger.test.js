const Passenger = require("./Passenger")
const Bag = require("./Bag")

const James = new Passenger("James", "123", "56")
const LeatherBag = new Bag("20")

describe ("Passenger", ()=>{
    test("expect Passenger's name to be James", ()=>{
        expect(James.name).toBe("James")
    })

    test("expect Bag to be added to bags array",()=>{
        James.addBag(LeatherBag)
        expect(James.bags.length).toEqual(1)
    })
})