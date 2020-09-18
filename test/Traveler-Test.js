import chai from 'chai';
const expect = chai.expect;

import Traveler from '../src/classes/Traveler.js';

let traveler1 = new Traveler();
let traveler2 = new Traveler();

describe('Traveler', function() {
  describe('Basics', function() {
  
    it('1. the variable should be an object', function() {
    
      expect(traveler1).to.be.an('object');
    });

    it('2. the class should be a function', function() {
    
      expect(Traveler).to.be.a('function');
    });
  
    it('3. should be an instance of Traveler', function() {
          
      expect(traveler2).to.be.an.instanceof(Traveler);
    });
  });

  describe('Traveler Methods', function() {
  
    it('4. should display trips: Past, Present, Upcoming, and Pending', function() {
    
      expect(/* */).to.equal();
      expect(/* */).to.equal();
      expect(/* */).to.equal();
      expect(/* */).to.equal();
    });

    it('5. should display the total amount I have spent on trips this year. This should be calculated from the trips data and include a travel agent’s 10% fee ', function() {
    
      expect(/* */).to.equal();
    });
  });
});
