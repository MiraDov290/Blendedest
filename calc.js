// node calc.js sum 3 4 7
// node calc.js mult 3 4 7
// node calc.js sub 7 2 1
// node calc.js div 8 2 2

const [operation, ...args] = process.argv.slice(2);
const numbers = args.map((item) => Number(item));

function calculate(operation, numbersAr) {
  switch (operation) {
    case "sum":
      return numbersAr.reduce((total, item) => total + item);
    case "mult":
      return numbersAr.reduce((total, item) => total * item);
    case "sub":
      return numbersAr.reduce((total, item) => total - item);
    case "div":
      return numbersAr.reduce((total, item) => total / item);
    default:
      return "Unknown operation";
  }
}

const result = calculate(operation, numbers);
console.log(result);
