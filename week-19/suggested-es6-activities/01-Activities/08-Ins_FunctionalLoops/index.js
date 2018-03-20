const moviePatrons = [
  { name: "Tom", age: 16 },
  { name: "Ashley", age: 31 },
  { name: "Sarah", age: 18 },
  { name: "Alvin", age: 22 },
  { name: "Cherie", age: 14 },
  { name: "Malcolm", age: 15 }
];

// forEach is a functional way of iterating through an array without a for-loop
// moviePatrons.forEach(patron => console.log(patron.age));

// // Filter returns a new array containing only elements whose callback returns a truthy value

// const oldEnough = moviePatrons.filter(function(patron) {
//   return patron.age <= 17;
// });

// console.log(result);

// console.log("Old enough: ");
// console.log(oldEnough);
// console.log("----------------------------");

// // Map returns a brand new array the same length as the first. Each element is passed into the callback.
// // Whatever is returned from the callback at each iteration is what goes into that index of the new array
const cardedMoviePatrons = moviePatrons.map(patron => {
  if (patron.age >= 17) {
    patron.oldEnough = true;
  } else {
    patron.oldEnough = false;
  }
  return patron;
});

console.log("Carded Movie Patrons: ");
console.log(cardedMoviePatrons);
console.log("----------------------------");

// console.log("Movie Patron Names: ");

// // For each is essentially a functional for loop
// moviePatrons.forEach(patron => console.log(patron.name));
