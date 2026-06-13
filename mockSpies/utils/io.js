import path from "path";
import { promises as fs } from "fs";

export const saveTokeToFile = (data, filename) => {
  const storagePath = path.join(process.cwd(), "mockspies/data", filename);

  return fs.writeFile(storagePath, data);
};
