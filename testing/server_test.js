const chai = require('chai');
var chaihttp = require('chai-http');
var server = require('../server');
var should = chai.should();

chai.use(chaihttp);

describe('Blobs', function() {
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
});