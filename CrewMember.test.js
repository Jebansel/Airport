const CrewMember= require("./CrewMember")
const Daniel = new CrewMember("Daniel", "1", "35")

describe("CrewMember", ()=>{
    test("is Daniel an instance of CrewMember", ()=>{        
        expect(Daniel).toBeInstanceOf(CrewMember)
    })

    test("expect Daniel.name = Daniel", ()=>{
        expect(Daniel.crewMemberName).toBe("Daniel")
    })

    








})

