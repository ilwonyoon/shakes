
var assert = require('assert');
var mocha = require('mocha');
var Shakes = require('../lib/shakes');

var validOpts = {
  'client_id': 'xxxxxxxxxx',
  'client_secret': 'xxxxxxxxxxxxxx'
};

var moves;
beforeEach(function() {
  moves = new Shakes(validOpts);
});

describe('shakes.get()', function() {
  describe('with valid arguments', function() {
    it('should create without error', function() {
      moves.get('userProfile',null, 'xxxxxxx', function() {});
    });
  });

  describe('with invalid arguments', function() {
    describe('with non existant endpoint', function() {
      it('should throw an error', function() {
        assert.throws(function() { moves.get('cat',null,'xxxxx', function() {}); }, Error);
      });
    });

    describe('with empty token', function() {
      it('should throw an error', function() {
        assert.throws(function() { moves.get('cat',null,'', function() {}); }, Error);
      });
    });
  });
});
