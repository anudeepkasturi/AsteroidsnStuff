function sum() {
  let accum = 0;
  Array.from(arguments).forEach(el => accum += el);
  return accum;
}

function sumRest(...args) {
  let accum = 0;
  args.forEach(el => accum += el);
  return accum;
}

// console.log(sum(1, 2, 3, 4));
// console.log(sumRest(1, 2, 3, 4, 5));

Function.prototype.myBind = function (object) {
  let bindArgs = (Array.from(arguments).slice(1));
  const context = this;
  return function() {
    let callArgs = (Array.from(arguments));
    return context.apply(object,bindArgs.concat(callArgs));
  }
}

Function.prototype.myBindRest = function (object, ...bindArgs) {
  return (...callArgs) => {
    return this.apply(object, bindArgs.concat(callArgs));
  }
};
//
// class Cat {
//   constructor(name) {
//     this.name = name;
//   }
//
//   says(sound, person) {
//     console.log(`${this.name} says ${sound} to ${person}!`);
//     return true;
//   }
// }
// const markov = new Cat("Markov");
// const breakfast = new Cat("Breakfast");
//
// console.log(markov.says.myBindRest(breakfast, "meow", "Kush")());
// console.log(markov.says.myBindRest(breakfast)("meow", "a tree"))


function curriedSum(numArgs,numbers = []) {
  function _curriedSum(number) {
    numbers.push(number);
    if (numbers.length !== numArgs) {
      return _curriedSum;
    } else {
      accum = 0;
      numbers.forEach (el => accum += el);
      return accum;
    }
  }
  return _curriedSum;
}

const sum = curriedSum(2);
console.log(sum(1)(9));


Function.prototype.curry = function (numArgs, args = []) {
  const fun = this;
  function _curry(arg) {
    args.push(arg);
    if (args.length !== numArgs) {
      return _curry;
    } else {
      return fun(...args);
    }
  }
  return _curry;
};

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

// or more briefly:
console.log(sumThree.curry(3)(4)(20)(6)); // == 30
