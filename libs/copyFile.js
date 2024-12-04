import { promises as fs } from "node:fs";
import { join } from "node:path";

export const copyFileAsync = async (src, dest) => {
  try {
    await fs.copyFile(join(process.cwd(), src), join(process.cwd(), dest));
    return "File successfully copied!";
  } catch (err) {
    throw new Error(`Error copying file: ${err.message}`);
  }
};
