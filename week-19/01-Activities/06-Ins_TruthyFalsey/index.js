// 1.
console.log(true || false);
console.log(true && false);
console.log((true && false) || "IDK MY BFF JILL");

// 2.
console.log("" && [].length);
console.log("" || [].length);
console.log("" || [].length || 0);

// 3.
const likesVeggies = false;
const meal = likesVeggies ? "Vegetable Stir Fry" : "Cheeseburger";
console.log(meal);

const feelingWell = false;
const goingOutTonight = feelingWell ? true : false;
console.log(goingOutTonight);