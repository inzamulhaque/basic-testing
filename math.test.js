import { expect, it } from "vitest";
import { stringLength, sumOfNumbers } from "./math";

it("should return the correct sum if an array of number is provided", () => {
  // arrange
  const numbers = [1, 3, 5];

  // actions
  const result = sumOfNumbers(numbers);

  // assertion
  expect(result).toBe(9);
});

it("should provide NaN if at least one invalid number is provided", () => {
  // arrange
  const numbers = [1, "null", 5];

  // actions
  const result = sumOfNumbers(numbers);

  // assertion
  expect(result).toBeNaN();
});

it("should provide correct sum if an array numeric string is provided", () => {
  // arrange
  const numbers = ["1", "3", "5"];

  // actions
  const result = sumOfNumbers(numbers);

  // assertion
  expect(result).toBe(9);
});

it("should throw an error if no argument is passed", () => {
  // try {
  //   const result = sumOfNumbers();
  // } catch (error) {
  //   expect(error).toBeDefined();
  // }

  const resultFn = () => {
    sumOfNumbers();
  };

  expect(resultFn).toThrow();
});

it("should throw an error if multiple argument is passed", () => {
  const resultFn = () => {
    sumOfNumbers(1, 3, 5);
  };

  expect(resultFn).toThrow(/is not iterable/i);
});

it("should return the correct length of string", () => {
  const str = "alif";

  const result = stringLength(str);

  expect(result).toBe(4);
});

it("should throw an error if numeric value is passed", () => {
  const num = 12345;
  try {
    const result = stringLength(num);
  } catch (error) {
    expect(error).toThrow();
  }
});

it("should throw an error if no string is passed", () => {
  const resultFn = () => stringLength();

  expect(resultFn).toThrow();
});
