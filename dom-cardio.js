const inventors = [
  {
    first: 'Albert',
    last: 'Einstein',
    year: 1879,
    passed: 1955,
  },
  {
    first: 'Marie',
    last: 'Curie',
    year: 1867,
    passed: 1934,
  },
  {
    first: 'Isaac',
    last: 'Newton',
    year: 1643,
    passed: 1727,
  },
  {
    first: 'Nikola',
    last: 'Tesla',
    year: 1856,
    passed: 1943,
  },
  {
    first: 'Ada',
    last: 'Lovelace',
    year: 1815,
    passed: 1852,
  },
  {
    first: 'Galileo',
    last: 'Galilei',
    year: 1564,
    passed: 1642,
  },
  {
    first: 'Leonardo',
    last: 'da Vinci',
    year: 1452,
    passed: 1519,
  },
  {
    first: 'Charles',
    last: 'Darwin',
    year: 1571,
    passed: 1630,
  },
  {
    first: 'Jane',
    last: 'Goodall',
    year: 1934,
    passed: 2004, // She is still alive (as of my knowledge cutoff in September 2021)
  },
  {
    first: 'Alan',
    last: 'Turing',
    year: 1912,
    passed: 1954,
  },
];

const people = [
  'Benn, Glenn',
  'Emma, Olivia',
  'Sophia, Ava',
  'Noah, Liam',
  'Isabella, Mia',
  'William, James',
  'Charlotte, Harper',
  'Oliver, Elijah',
  'Amelia, Evelyn',
  'Benjamin, Lucas',
  'Ella, Grace',
  'Michael, Andrew',
  'Abigail, Emily',
  'Ethan, Alexander',
  'Daniel, Henry',
  'David, Jackson',
  'Madison, Aria',
  'Joseph, Carter',
  'Sophie, Scarlett',
  'Logan, Liam',
];

// 1. Filter the list of inventors for those who were born in the 1500's

const fifteen = inventors.filter(
  (inventor) => inventor.year >= 1500 && inventor.year <= 1600
);

// console.table(fifteen);

// 2. Give us an array of the inventors and first and last names

const inventorNames = inventors.map(
  (inventor) => `${inventor.first} ${inventor.last}`
);

// console.log(inventorNames);

// 3. Sort the inventors by birthdate, oldest toyoungest

// const sorted = inventors.sort(function (a, b) {
//   if (a.year > b.year) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

const sorted = inventors.sort((a, b) => (a.year > b.year ? 1 : -1));

// console.table(sorted);

// 4. How many years did all the inventors lived?

const yearsLived = inventors.reduce(function (total, inventor) {
  return total + (inventor.passed - inventor.year);
}, 0);

// console.log(yearsLived);

// 5. Sort the inventors by years lived

const oldest = inventors.sort(function (a, b) {
  const lastGuy = a.passed - a.year;
  const nextGuy = b.passed - b.year;
  return lastGuy > nextGuy ? -1 : 1;
});

// console.table(oldest);


