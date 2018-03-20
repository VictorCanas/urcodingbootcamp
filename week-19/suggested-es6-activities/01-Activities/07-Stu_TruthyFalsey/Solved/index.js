// 1. Update this function to use a short circuit evaluation to set a default value for `something`
// Think back to node and how we set a PORT 😉
const logSomething = something => {
  something = something || "something";
  console.log(something);
};

logSomething();

// 2. Update the code below to set `isTired` using a ternary expression (variable = conditional ? value : otherValue)

let isTired;
const beenWorkingAllDay = true;

isTired = beenWorkingAllDay ? true : false;
