import { beforeEach, expect, it } from "vitest";
import { User } from "./hooks";

const testEmail = "test@test.com";

let user;

beforeEach(() => {
  user = new User(testEmail);
});

it("should have an email property", () => {
  expect(user).toHaveProperty("email");
});

it("should update the email", () => {
  const newTestEmail = "newtest@test.com";

  user.updateEmail(newTestEmail);

  expect(user.email).toBe(newTestEmail);
});

it("should store the provided email value", () => {
  expect(user.email).toBe(testEmail);
});

it("should clean the email", () => {
  user.cleanEmail();

  expect(user.email).toBe("");
});

it("should still have an email property after cleaning", () => {
  user.cleanEmail();

  expect(user).toHaveProperty("email");
});
