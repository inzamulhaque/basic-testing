import { transformToNumber } from "../transformToNumber";

const validationStringNotEmpty = (str) => {
  if (str.trim().length === 0) {
    throw new Error("Empty string");
  }
};

const validNumber = (num) => {
  if (isNaN(num)) {
    throw new Error("Not a number");
  }
};

export const cleanNUmbers = (inputNumbers) => {
  const numbers = [];

  for (const numberInput of inputNumbers) {
    validationStringNotEmpty(numberInput);
    const number = transformToNumber(numberInput);
    validNumber(number);
    numbers.push(number);
  }

  return numbers;
};
