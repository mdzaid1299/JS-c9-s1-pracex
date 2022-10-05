let number1 = 30;
let number2 = 50;
let number3 = 45;

let max;

// Using nested-if
if (number1 > number2) {
  if (number1 > number3) {
    max = number1;
  } else {
    max = number3;
  }
} else {
  max = number2;
}

console.log(`Largest Number is ${max}`);

// Using ternary operator
number1 > number2
  ? number1 > number3
    ? (max = number1)
    : (max = number3)
  : (max = number2);

console.log(`Largest Number is ${max}`);
