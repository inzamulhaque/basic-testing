import { expect, it } from "vitest";
import sortArray from "./arraySorting";

it("should sort an array of numbers in ascending order", () => {
  const arr = [5, 3, 8, 1, 2];

  const sortedArr = sortArray(arr);

  expect(sortedArr).toEqual([1, 2, 3, 5, 8]);
});
