//expect(() => new Bag()).toThrowError('bag must have a weight')
const Bag = require("./Bag")
var b = new Bag(5)


describe("expect a = 5", ()=>{
    test("expect a = 5", ()=>{
        let a = 5
        expect(b.weight).toBe(5)
    })
})

