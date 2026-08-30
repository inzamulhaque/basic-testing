import { afterAll, afterEach, beforeAll, beforeEach, expect, it } from "vitest";
import cryptoJS from "crypto-js";
import { encryptMessage, encryptMessagePromise } from "./async";

beforeAll(() => {
  console.log("Before All!");
});

afterAll(() => {
  console.log("After All!");
});

beforeEach(() => {
  console.log("Before Each!");
});

afterEach(() => {
  console.log("After Each!");
});

it("should encrypt a message", async () => {
  const message = {
    email: "explain@mail.com",
    password: "1234567",
  };

  const secretKey = "sdffewuyvbhvsihiojijygugygf";

  const encryptedData = await new Promise((resolve, reject) => {
    encryptMessage(JSON.stringify(message), secretKey, (encryptedMessage) => {
      resolve(encryptedMessage);
    });
  });

  expect(encryptedData).toBeDefined();
});

it("should encrypt a message with promise", async () => {
  const message = {
    email: "explain@mail.com",
    password: "1234567",
  };

  const secretKey = "sdffewuyvbhvsihiojijygugygf";

  const encryptedData = await encryptMessagePromise(
    JSON.stringify(message),
    secretKey,
  );

  expect(encryptedData).toBeDefined();
});

it("should encrypt a message with promise and check is equal to message or not", async () => {
  const message = "Test message";

  const secretKey = "sdffewuyvbhvsihiojijygugygf";

  const encryptedData = await encryptMessagePromise(message, secretKey);

  const bytes = cryptoJS.AES.decrypt(encryptedData, secretKey);

  const decryptData = bytes.toString(cryptoJS.enc.Utf8);

  expect(decryptData).toBe(message);
});


// off day
