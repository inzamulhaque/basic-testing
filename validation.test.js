import { describe, expect, it } from "vitest";
import { validateArrayNotEmpty, validatedEmail } from "./validation";

describe("validatedEmail()", () => {
  it("should validate a correct email address", () => {
    const email = "example@gmail.com";
    const resultFn = () => validatedEmail(email);

    expect(resultFn).not.toThrow();
  });

  it("should throw an error for invalid email", () => {
    const email = "invalid-email";
    const resultFn = () => validatedEmail(email);

    expect(resultFn).toThrow("Invalid email format!");
  });

  it("should throw an error for empty string is passed", () => {
    const email = "";
    const resultFn = () => validatedEmail(email);

    expect(resultFn).toThrow("Invalid email format!");
  });

  it("should throw an error for null is passed", () => {
    const email = null;
    const resultFn = () => validatedEmail(email);

    expect(resultFn).toThrow("Invalid email format!");
  });

  it("should throw an error for undefined is passed", () => {
    const email = undefined;
    const resultFn = () => validatedEmail(email);

    expect(resultFn).toThrow("Invalid email format!");
  });
});

describe("validateArrayNotEmpty()", () => {
  it("should validate a non empty array", () => {
    const arr = [1, 2, 3];
    const resultFn = () => validateArrayNotEmpty(arr);

    expect(resultFn).not.toThrow();
  });

  it("should throw an error for empty array", () => {
    const arr = [];
    const resultFn = () => validateArrayNotEmpty(arr);

    expect(resultFn).toThrow("Array cannot be empty!");
  });

  it("should throw an error for null is passed", () => {
    const arr = null;
    const resultFn = () => validateArrayNotEmpty(arr);

    expect(resultFn).toThrow("Array cannot be empty!");
  });
});
