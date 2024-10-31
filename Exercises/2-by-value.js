'use strict';

const inc = (blabla) => {
  //blabla = [17,  -100, 'car', 'home', 'dog', '999'];
  blabla += 1;
  console.log(blabla);
};
const x = 7;
inc(x);

console.log(x);
module.exports = { inc };
