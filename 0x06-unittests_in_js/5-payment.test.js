const sendPaymentRequestToApi = require('./4-payment');
const sinon = require('sinon');
const expect = require('chai').expect;


describe('sendPaymentRequestToApi', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleSpy.restore();
  });

  it('should verify that the console is logging total as 120', () => {
    sendPaymentRequestToApi(100, 20);
    expect(consoleSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
    expect(consoleSpy.calledOnce).to.be.true;
  });

  it('should log the correct total for 10 and 10', () => {
    sendPaymentRequestToApi(10, 10);
    expect(consoleSpy.calledOnceWithExactly('The total is: 20')).to.be.true;
    expect(consoleSpy.calledOnce).to.be.true;
  });
});
