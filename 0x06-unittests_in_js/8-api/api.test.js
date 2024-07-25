// 8-api/api.test.js
const request = require('request');
const { expect } = require('chai');
const app = require('./api'); // Import the Express app
const port = 7865;

describe('Index page', () => {
  before((done) => {
    app.listen(port, () => {
      console.log(`Test server running on port ${port}`);
      done();
    });
  });

  it('should return status code 200', (done) => {
    request.get(`http://localhost:${port}`, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should return correct message', (done) => {
    request.get(`http://localhost:${port}`, (err, res, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  after((done) => {
    app.close(done);
  });
});
