import chai from 'chai';
const expect = chai.expect;

import Traveler from '../src/classes/Traveler.js';

describe('Traveler', function() {
  beforeEach(() => {

    let traveler1 = new Traveler();

    let traveler2 = new Traveler();
  });
  
  it('should return true', function() {
    expect(true).to.equal(true);
  });
});
