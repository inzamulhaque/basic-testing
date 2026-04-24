import { expect, it } from "vitest";
import { cleanNUmbers } from "./numbers";

it("should return array of numbers if an array of numeric string provided", () => {
  const numbers = ["1", "2", "3"];
  const result = cleanNUmbers(numbers);

  expect(result[0]).toBe(1);
  expect(result[1]).toBe(2);
  expect(result[2]).toBe(3);
});

it("should throw an error if an empty string is provided", () => {
  const numbers = ["1", "", "3"];
  const resultFn = () => cleanNUmbers(numbers);

  expect(resultFn).toThrow(/Empty string/i);
});
