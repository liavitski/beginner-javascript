const person = {
  name: 'Pavel Liavitski',
  sayHi() {
    console.log(this);
    console.log(`Hey ${this.name}`);
  },
};

const jenna = { name: 'Jenna' };

const sayHi = person.sayHi.bind(jenna);

// Query Selector Example
// by calling bind against querySelector, we say when the $ function is run, use 'document' as the 'this' value.
const $ = document.querySelector.bind(document);

const wrapper = document.querySelector('.wrapper');
const p = wrapper.querySelector('p');
// console.log(p);
// console.log($('p'))

const bill = {
  total: 1000,
  calculate: function (taxRate) {
    return this.total + this.total * taxRate;
  },
  describe(mealType, drinkType, taxRate) {
    console.log(
      `Your meal of ${mealType} with a drink of ${drinkType} was ${this.calculate(
        taxRate
      )}`
    );
  },
};

const total = bill.calculate(0.13);
console.log(total);

const calc = bill.calculate.bind({ total: 500 }, 0.06);
console.log(calc());

const total2 = bill.calculate.call({ total: 500 }, 0.06);
console.log(total2);

const total3 = bill.calculate.apply({ total: 325 }, [0.6]);
console.log(total3);
