import { promises as fs } from "node:fs";
import { join } from "node:path";

export const fileExists = async (filePath) => {
  try {
    await fs.access(join(process.cwd(), filePath));
    return true;
  } catch {
    return false;
  }
};
