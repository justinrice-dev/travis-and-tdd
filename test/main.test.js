const chai = require("chai")
const helpers = require("../helpers/main")
const expect = chai.expect

describe("Testing is_even function", () => {
    it("Should tell us that the number is even", () => {
        expect(helpers.is_even(20)).to.equal(true)
        expect(helpers.is_even(21)).to.equal(false)
        expect(helpers.is_even(10000)).to.equal(true)
    })
})

describe("Testing is_odd function", () => {
    it("Should tell us that the number is even", () => {
        expect(helpers.is_odd(20)).to.equal(false)
        expect(helpers.is_odd(21)).to.equal(true)
        expect(helpers.is_odd(10000)).to.equal(false)
    })
})
