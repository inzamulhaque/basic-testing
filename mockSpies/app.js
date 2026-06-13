import crypto from "crypto";
import { saveTokeToFile } from "./utils/io.js";

export const log = (message) => {
  console.log(message);
};

export const generateToken = (logger) => {
  const token = crypto.randomBytes(32).toString("hex");

  if (logger) logger(token);

  return token;
};

export const storeToken = async (data) => {
  if (!data) throw new Error("No data provided");

  const filename = `data-${Date.now()}.txt`;

  await saveTokeToFile(data, filename);
};

// const data = generateToken(log);

// storeToken(data);
