// named export
export const apiKey = 'abc123';
export const url = 'https://pavel.com';

export function sayHi(name) {
  console.log(`Hello there ${name}`);
}

const age = 100;
const dog = 'Snickers';

export { age as old, dog };
