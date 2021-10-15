const Plane = require("./Plane")
const CrewMember = require("./CrewMember")
//const CrewMember = require("./CrewMember")

const Boeing747 = new Plane("Boeing 747")

const Fred = new CrewMember("Fred", "2","90")

describe("Plane", ()=>{
    test("expect Plane name to be Boeing 747", ()=>{        
        expect(Boeing747.typeOfPlane).toBe("Boeing 747")
    })

    test("expect CrewMember to be added to the Passenger array", ()=>{
        Boeing747.addPassenger(Fred)        
        expect(Boeing747.passengers.length).toEqual(1)
    })
    
})

