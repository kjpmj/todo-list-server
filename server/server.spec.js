const should = require('should');
const request = require('supertest');
const app = require('./server');

describe('GET /todos', () => {
  it('할일 배열 반환', (done) => {
    request(app)
      .get('/todos')
      .end((err, res) => {
        if(err) throw err;

        res.body.should.be.instanceof(Array);
        res.body.forEach(item => {
          item.should.be.an.instanceof(Object).and.have.property('id', 1)
        });
        console.log(res.body)
      })
    done()
  });
});