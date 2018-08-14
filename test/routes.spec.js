process.env.NODE_ENV = 'test';

var chai = require('chai');
var chaiHttp = require('chai-http');

var server = require('../tools/srcServer');
var knex = require('../tools/knex');

var should = chai.should();

chai.use(chaiHttp);

  describe('Get all shows', function() {
    it('should get all shows', function(done) {
      chai.request(server)
      .get('/api/startkit')
      .end(function(err, res) {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.status.should.equal('success');
        res.body.message.should.equal('Retrieved ALL stertkit');
        res.body.data.length.should.equal(4);
        res.body.data[0].should.have.property('name');
        res.body.data[0].name.should.equal('Suits');
        res.body.data[0].should.have.property('channel');
        res.body.data[0].channel.should.equal('USA Network');
        res.body.data[0].should.have.property('genre');
        res.body.data[0].genre.should.equal('Drama');
        res.body.data[0].should.have.property('rating');
        res.body.data[0].rating.should.equal(3);
        res.body.data[0].should.have.property('explicit');
        res.body.data[0].explicit.should.equal(false);
        done();
      });
    });
  });

  // GET single show
  describe('GET /api/startkit/:id', function () {
    it('should return a single show', function (done) {
      chai.request(server)
      .get('/api/startkit/1')
      .end(function (err, res) {
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.be.a('object');
        res.body.status.should.equal('success');
        res.body.message.should.equal('Retrieved ONE stertkit');
        res.body.data.should.have.property('name');
        res.body.data.name.should.equal('Suits');
        res.body.data.should.have.property('channel');
        res.body.data.channel.should.equal('USA Network');
        res.body.data.should.have.property('genre');
        res.body.data.genre.should.equal('Drama');
        res.body.data.should.have.property('rating');
        res.body.data.rating.should.equal(3);
        res.body.data.should.have.property('explicit');
        res.body.data.explicit.should.equal(false);
        done();
      });
    });
  });
