import { describe, expect, it, vi } from "vitest";
import { generateToken } from "./app";

describe("generateToken()", () => {
  it("should execute the logger function if passed", () => {
    const loggerFn = vi.fn();

    // loggerFn.mockImplementation(()=>{}) // same as vi.fn()
    // loggerFn.mockImplementationOnce(()=>{}) // same as vi.fn() // use only once time

    generateToken(loggerFn);

    expect(loggerFn).toHaveBeenCalled();
    // expect(loggerFn).toHaveBeenCalledTimes(1);
    // expect(loggerFn).toHaveBeenCalledWith();
  });
});
