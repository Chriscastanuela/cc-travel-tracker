import chai from 'chai';
const expect = chai.expect;

import Traveler from '../src/classes/Traveler.js';

let traveler1 = new Traveler(1);
let traveler2 = new Traveler(2);

describe('Traveler', function() {
  describe('Properties', function() {
  
    it('1. the variable should be an object', function() {
    
      expect(traveler1).to.be.an('object');
    });

    it('2. the class should be a function', function() {
    
      expect(Traveler).to.be.a('function');
    });
  
    it('3. should be an instance of Traveler', function() {
          
      expect(traveler2).to.be.an.instanceof(Traveler);
    });

    it('4. should have an identifier', function() {
          
      expect(traveler1.identifier).to.equal(1);
      expect(traveler2.identifier).to.equal(2);
    });
  });
});