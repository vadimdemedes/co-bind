/**
 * Dependencies
 */

const bind = require('./');

// register test utilities
require('mocha-generators')();
require('chai').should();


/**
 * Tests
 */

describe ('co-bind', function () {
  it ('set context', function * () {
    var context = { a: 1 };
    var success = false;
    
    function * test () {
      this.a.should.equal(1);
      success = true;
    }
    
    yield bind(test, context);
    
    success.should.equal(true);
  });
  
  it ('set arguments', function * () {
    var context = { a: 1 };
    var success = false;
    
    function * test () {
      arguments[0].should.equal('hello');
      arguments[1].should.equal('world');
      
      this.a.should.equal(1);
      success = true;
    }
    
    yield bind(test, context, 'hello')('world');
    
    success.should.equal(true);
  });
});
