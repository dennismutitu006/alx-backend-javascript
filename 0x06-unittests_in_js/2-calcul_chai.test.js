const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return 6 when inputs are 1.4 and 4.5', () => {
      let sum = calculateNumber('SUM', 1.4, 4.5);
	  expect(sum).to.equal(6);
    });
  });

  describe('SUBTRACT', () => {
    it('should return -4 when inputs are 1.4 and 4.5', () => {
     let subtraction = calculateNumber('SUBTRACT', 1.4, 4.5);
	  expect(subtraction).to.equal(-4);
    });
  });

  describe('DIVIDE', () => {
    it('should return 5 when inputs are 10 and 2', () => {
      let division = calculateNumber('DIVIDE', 10, 2);
      expect(division).to.equal(5);
    });
    it('should return Error when dividing by 0', () => {
       let zero = calculateNumber('DIVIDE', 1.4, 0);
       expect(zero).to.equal('Error');
    });
  });
});
