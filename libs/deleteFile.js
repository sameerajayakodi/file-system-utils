import { promises as fs } from "node:fs";
import { join } from "node:path";

export const deleteFileAsync = async (filePath) => {
  try {
    await fs.unlink(join(process.cwd(), filePath));
    return "File successfully deleted!";
  } catch (err) {
    throw new Error(`Error deleting file: ${err.message}`);
  }
};
