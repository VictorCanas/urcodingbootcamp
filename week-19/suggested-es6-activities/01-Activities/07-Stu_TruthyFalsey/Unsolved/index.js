// 1. Update this function to use a short circuit evaluation to set a default value for `something`
// Think back to node and how we set a PORT 😉
const logSomething = something => {
  console.log(something || "something else");
};

logSomething();

// 2. Update the code below to set `isTired` using a ternary expression (variable = conditional ? value : otherValue)

const beenWorkingAllDay = true;
let isTired = beenWorkingAllDay ? true : false;

console.log("Is tired?", isTired);
