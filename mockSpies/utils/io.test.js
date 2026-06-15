import { promises as fs } from "fs";
import { expect, it, vi } from "vitest";
import { saveTokeToFile } from "./io";

vi.mock("fs");
vi.mock("path", () => {
  return {
    default: {
      join: (...args) => args[args.length - 1],
    },
  };
});

it("should store the token in file", () => {
  const data = "dummy-token";
  const filename = `dummy-token-${Date.now()}.txt`;

  saveTokeToFile(data, filename);
  // expect(saveTokeToFile(data, filename)).resolves.toBeUndefined();
  // expect(fs.writeFile).toHaveBeenCalled();
  expect(fs.writeFile).toHaveBeenCalledWith(filename, data);
});
