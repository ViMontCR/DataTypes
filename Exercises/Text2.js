'use strict';

const inc = function(n) {
  return n + 1;
};

const a = 8;
const fn = inc(a);

const Num = {
  n: 0,
};

const myNum = Object.create(Num);
myNum.n = 9;
const fn1 = inc(myNum.n);

console.log(fn1);

module.exports = { fn };
