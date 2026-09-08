function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

function percentage(part, whole) {
  if (whole === 0) {
    return 0;
  }
  return (part / whole) * 100;
}

module.exports = { add, subtract, multiply, divide, percentage };
