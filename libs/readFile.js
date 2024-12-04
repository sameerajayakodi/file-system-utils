import { promises as fs } from "node:fs";
import { join } from "node:path";

export const readFileAsync = async (filePath) => {
  try {
    const data = await fs.readFile(join(process.cwd(), filePath), "utf-8");
    return data;
  } catch (err) {
    throw new Error(`Error reading file: ${err.message}`);
  }
};
