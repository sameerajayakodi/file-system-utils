import { promises as fs } from "node:fs";
import { join } from "node:path";

export const appendFileAsync = async (filePath, data) => {
  try {
    await fs.appendFile(join(process.cwd(), filePath), data, "utf-8");
    return "Content successfully appended!";
  } catch (err) {
    throw new Error(`Error appending file: ${err.message}`);
  }
};
