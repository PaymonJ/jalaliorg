const chai = require('chai');
const chaihttp = require('chai-http');
const server = require('../server');
const suncalc = require('suncalc');
const should = chai.should();

chai.use(chaihttp);

describe('Test server routes', function() {
    it('should GET / with status 200', function(done) {
        chai.request(server)
            .get('/')
            .end(function(err, res) {
                res.should.have.status(200);
                done();
            });
    });
    it('should GET /moonphase with status 200', function(done) {
        chai.request(server)
            .get('/moonphase')
            .end(function(err, res) {
                res.should.have.status(200);
                done();
            });
    });
    it('should GET /badroute with status 404', function(done) {
        chai.request(server)
            .get('/badroute')
            .end(function(err, res) {
                res.should.have.status(404);
                done();
            });
    });
    it('should get a value between 0 and 1 for moonphase', function(done) {
        let moonphase = Math.round(suncalc.getMoonIllumination(new Date()).phase*100)/100;
        moonphase.should.be.within(0, 1);
        done();
    });
});