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

module.exports = calculate;
