import path from "path";
import fs from "fs";

export const saveTokeToFile = (data, filename) => {
  const storagePath = path.join(process.cwd(), "data", filename);

  return fs.promises.writeFile(storagePath, data);
};
