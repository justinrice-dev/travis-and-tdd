var chai = require('chai'),
    chaiHttp = require('chai-http');
const app = require("../server").app;
const expect = chai.expect;
const should = chai.should()
chai.use(chaiHttp);



describe("GET /", () => {
    it('Gives us the health check endpoint', function (done) { // <= Pass in done callback
        chai.request('http://localhost:3001')
            .get('/health')
            .end(function (err, res) {
                expect(res).to.have.status(200);
                done(); // <= Call done to signal callback end
            });
    });
})

describe("POST /api/new", () => {
    it('Gives us the new item with an id', function (done) { // <= Pass in done callback
        chai.request('http://localhost:3001')
            .post('/api/new')
            .type("form")
            .send({
                name: "Justin",
                city: "Boston"
            })
            .end(function (err, res) {
                expect(res).to.have.status(200);
                res.body.should.be.a('object')
                done(); // <= Call done to signal callback end
            });
    });
})