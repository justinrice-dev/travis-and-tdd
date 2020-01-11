const chai = require("chai")
const helpers = require("../helpers/main")
const expect = chai.expect

describe("Testing is_even function", () => {
    it("Should tell us that the number is even", () => {
        expect(helpers.is_even(20)).to.equal(true)
    })

})