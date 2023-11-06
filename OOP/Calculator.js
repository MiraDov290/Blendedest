class Calculator {
  constructor(operation, numbers) {
    this.operation = operation;
    this.numbers = numbers;
  }
  calculate(operation, numbersAr) {
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
  init() {
    return this.calculate(this.operation, this.numbers);
  }
}

const [operation, ...args] = process.argv.slice(2);
const numbers = args.map((item) => Number(item));

module.exports = new Calculator(operation, numbers);
