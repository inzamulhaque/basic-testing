import { expect, it } from "vitest";
import reverseArray from "./arrayReversing";

it("should reverse an array", () => {
  const arr = [1, 2, 3, 4, 5];

  const result = reverseArray(arr);

  expect(result).toEqual(arr.reverse());
});
