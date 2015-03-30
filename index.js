/**
 * Expose .bind() for generator functions
 */

module.exports = function bind (fn, context) {
  var args = Array.prototype.slice.call(arguments, 2);
  
  return function * () {
    var thisArgs = Array.prototype.slice.call(arguments);
    
    return yield fn.apply(context, args.concat(thisArgs));
  };
};
