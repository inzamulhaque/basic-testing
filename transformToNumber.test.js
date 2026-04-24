import { expect, it } from "vitest";
import { transformToNumber } from "./transformToNumber";

it("should return an number if numeric string provided", () => {
  const num = "12345";

  const result = transformToNumber(num);

  expect(result).toBe(12345);
});

it("should return number type data if numeric string provided", () => {
  const num = "12345";

  const result = transformToNumber(num);

  expect(result).toBeTypeOf("number");
  expect(result).not.toBeNaN();
});
