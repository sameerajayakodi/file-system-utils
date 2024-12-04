import { promises as fs } from "node:fs";
import { join } from "node:path";

export const createDir = async (dirPath) => {
  try {
    await fs.mkdir(join(process.cwd(), dirPath), { recursive: true });
    return "Directory successfully created!";
  } catch (err) {
    throw new Error(`Error creating directory: ${err.message}`);
  }
};

export const listDir = async (dirPath) => {
  try {
    const files = await fs.readdir(join(process.cwd(), dirPath));
    return files;
  } catch (err) {
    throw new Error(`Error listing directory: ${err.message}`);
  }
};

// Updated the deleteDir function to use fs.rm instead of fs.rmdir
export const deleteDir = async (dirPath) => {
  try {
    await fs.rm(join(process.cwd(), dirPath), { recursive: true, force: true });
    return "Directory successfully deleted!";
  } catch (err) {
    throw new Error(`Error deleting directory: ${err.message}`);
  }
};
