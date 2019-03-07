//обьект
function isEmpty(obj) {
  for (var key in obj) {
    return false;
  }
  return true;
}

var schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "подъём";

alert( isEmpty(schedule) ); // false

//2

'use strict';

/**
 * Compares 2 objects
 *
 * If values in all props are equal
 * (including props of nested objects)
 * returns true (otherwise false)
 *
 * @param {object} a
 * @param {object} b
 *
 * @return {boolean}
 */
function deepEqual(a, b) {

}


// Tests

let a = { name: 'Misha', order: { price: 20 } };
let b = { order: { price: 20 }, name: 'Misha' };
let c = { name: 'Misha', order: { price: 20 }, extraField: null };
let d = { order: { price: 20 }, name: 'Petya' };
let e = { name: 'Misha', order: { price: 1000 } };
let f = { name: 'Misha', order: { price: 20, extraField: null } };


console.assert(deepEqual(a, b) === true, 'A and B should be equal');
console.assert(deepEqual({ test: a }, { test: b }) === true, 'A and B should be equal');


console.assert(deepEqual(a, c) === false, 'A and C should NOT be equal');
console.assert(deepEqual(a, d) === false, 'A and D should NOT be equal');
console.assert(deepEqual(a, e) === false, 'A and E should NOT be equal');
console.assert(deepEqual(a, f) === false, 'A and F should NOT be equal');