import chai from 'chai';
const expect = chai.expect;

import TravelAgent from '../src/classes/Travel-Agent.js';

describe('TravelAgent', function() {
  beforeEach(() => {

    let travelAgent1 = new TravelAgent();

    let travelAgent2 = new TravelAgent();
  });
  
  it('should return true', function() {
    expect(true).to.equal(true);
  });
});