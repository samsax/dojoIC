'use strict';

var appempic = require('../');
var assert = require('should');

describe('appempic', function () {

  it('should be name', function () {
    appempic.getName().should.equal('samue');
  });
  it('should be lasName', function () {
    appempic.getLastName().should.equal('arenas');
  });

});
