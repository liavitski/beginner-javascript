const numbers = [2, 34, 3, 23, 42, 3, 1, 65, 364, 5, 645, 6];

const name = 'Wes Bos👪🏻🎅🏻👩‍👩‍👧‍👦';

const wes = {
  name: 'wes',
  age: 100,
  cool: true
};

// for (const number of numbers) {
//   console.log(number);
// }

for (const key in wes) {
  console.log(`${key}:${wes[key]}`);
}
