import { promises as fs } from "node:fs";
import { join } from "node:path";

export const writeFileAsync = async (filePath, data) => {
  try {
    await fs.writeFile(join(process.cwd(), filePath), data, "utf-8");
    return "File successfully written!";
  } catch (err) {
    throw new Error(`Error writing file: ${err.message}`);
  }
};
