import { expect, it } from "vitest";
import sortArray from "./arraySorting";

it("should sort an array of numbers in ascending order", () => {
  const arr = [5, 3, 8, 1, 2];

  const sortedArr = sortArray(arr);

  expect(sortedArr).toEqual([1, 2, 3, 5, 8]);
});

it("should return an array", () => {
  const arr = [5, 3, 8, 1, 2];

  const result = sortArray(arr);

  expect(result).toBeInstanceOf(Array);
});

it("should throw an error if input is not an array", () => {
  const number = 5;

  const resultFN = () => sortArray(number);

  expect(resultFN).Throw(Error, "Input must be an array");
});
