// define the type of the parameter
const add = function (num1: number, num2: number) {
  return num1 + num2;
};

// define the type of the outcome
const add1 = function (num1: number, num2: number): number {
  return num1 + num2;
};

// convert the type of the outcome
const add2 = function (num1: number, num2: number): string {
  return num1.toString() + num2.toString();
};

// use union type while defining type of parameters
const add3 = function (num1: number | string, num2: number | string): string {
  return num1.toString() + num2.toString();
};
