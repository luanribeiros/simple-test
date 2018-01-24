'use strict';

var sum = function sum(num1, num2) {
  if(!num1 || !num2) {
    return new Error('Passe dois números por parâmetros');
  }
  if(typeof num1 !== 'number' || typeof num2 !== 'number') {
    return new Error('Os parâmetros devem ser números');
  }
  return num1 + num2;
}

module.exports = sum;
