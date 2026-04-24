export const sumOfNumbers = (numbers) => {
  let sum = 0;

  for (const number of numbers) {
    sum += +number;
  }

  return sum;
};

export const stringLength = (str) => str.length;
