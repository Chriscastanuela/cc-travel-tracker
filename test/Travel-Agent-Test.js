import chai from 'chai';
const expect = chai.expect;

import TravelAgent from '../src/classes/Travel-Agent.js';

let travelAgent1 = new TravelAgent();
let travelAgent2 = new TravelAgent();

describe('TravelAgent', function() {

  describe('Properties', function() {

    it('1. the variable should be an object', function() {
    
    expect(travelAgent1).to.be.an('object');
    });

    it('2. the class should be an object', function() {
    
    expect(TravelAgent).to.be.a('function');
    });

    it('3. should be an instance of TravelAgent', function() {
        
    expect(travelAgent2).to.be.an.instanceof(TravelAgent);
    });
  });
});