const [operation, ...args] = process.argv.slice(2);
const numbers = args.map((item) => Number(item));

module.exports = {
  operation,
  numbers,
};
