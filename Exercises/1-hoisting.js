'use strict';

const fn = function() {
  const n = 7;
  console.log(n);
  return n + 1;
};

const a = 8;
const abc = fn(a);

const Num = {
  n: 0,
};

const myNum = Object.create(Num);
myNum.n = 9;
const fn1 = fn(myNum.n);

console.log(fn1);

module.exports = { fn };

