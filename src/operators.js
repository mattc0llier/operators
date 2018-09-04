// Rewrite function as arrow function
function convertToNumber(string) {
  // function receives a string representation
  // of a number convert it to a number and return it
  return +string;
}

// Rewrite function as arrow function
function convertToNegativeNumber(string) {
  return +string > 0 ? -string : +string;

  //Overcomplicated?

  // function receives a string representation
  // of a number
  // convert string to number and return a negative version of the number
}

// Rewrite function as arrow function
function invertBoolean(input) {
  console.log(typeof input);

  if (typeof input === "boolean") {
    return !input;
  } else {
    return input;
  }
  // function receives one argument which could be of any type
  // if it is a boolean negate it, true -> false, false to true
  // if the input is not a boolean return the input
}

// Rewrite function as arrow function
function convertToBoolean(list) {
  return list.map(element => !!element);
  // Function receives an array of values which could be of any type
  // Convert all values in array to boolean and return the array
}

// Rewrite function as arrow function
function deleteStrings(list) {
  for (let i = 0; i <= list.length; i++) {
    if (typeof list[i] === "string") {
      delete list[i];
    }
  }
  return list;
  // Function receives an array of strings and numbers
  // delete strings in array, (make them undefined)
  // return resulting array
}

// Rewrite function as arrow function
function deleteYear(cars) {
  for (let i = 0; i <= cars.length - 1; i++) {
    console.log(cars[i]);
    console.log(cars[i].year);
    if (cars[i].year < 1995) {
      delete cars[i].year;
    }
  }
  return cars;
  // cars is an array of objects. Each object has a make, model and year property
  // For example { make: 'Ford', model: 'Fiesta', year: 1991 }
  // return an array of cars with year property deleted if the year is before 1995
}

// Rewrite function as arrow function
function isBetween(number, from, to) {
  if (number >= from && number < to) {
    return true;
  } else {
    return false;
  }
  // function receives three numbers as arguments
  // return true if number is equal to or greater than from and less than, to
  // return false otherwise
}

// Rewrite function as arrow function
function evens(a, b, c, d) {
  console.log(!!(a % 2));
  return (
    !!(a % 2 === 0) && !!(b % 2 === 0) && !!(c % 2 === 0) && !!(d % 2 === 0)
  );
  // function receives 4 numbers return true if all numbers are even and false otherwise
  // do not use if/else or ternary
}

// Rewrite function as arrow function
function averageOfStrings(list) {
  let sum = 0;
  let count = 0;
  for (let i = 0; i < list.length; i++) {
    if (typeof list[i] === "string") {
      console.log(list[i]);
      sum += +list[i];
      count++;
    }
  }
  return sum / count;
  // function receives an array of numbers and string representation of numbers
  // calculate an average value of numbers represented as strings and return it.
}

// Rewrite function as arrow function
function footballScores(results) {
  let output = [];

  for (let i = 0; i < results.length; i++) {
    if (results[i].home > results[i].away) {
      output.push("home");
    } else if (results[i].home < results[i].away) {
      output.push("away");
    } else {
      output.push("draw");
    }
  }

  return output;
  // results is an array of football scores represented as objects
  // for example: [{home: 0, away: 2}, {home: 3, away: 1}, {home: 1, away: 1}]
  // return an array of winning teams or draw if results are same
  // for example: [away, home, draw]
}

module.exports = {
  convertToNumber,
  convertToNegativeNumber,
  invertBoolean,
  convertToBoolean,
  deleteStrings,
  deleteYear,
  isBetween,
  evens,
  averageOfStrings,
  footballScores
};
