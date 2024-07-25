const getPaymentTokenFromAPI = require('./6-payment_token');
const expect = require('chai').expect;

describe('getPaymentTokenFromAPI', () => {
  it('return a successful response when success is true', () => {
    getPaymentTokenFromAPI(true).then(res => {
      expect(res).to.include({ data: 'Successful response from the API' });
      });
  });
});
