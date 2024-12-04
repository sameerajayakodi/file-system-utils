import {
  appendFileAsync,
  copyFileAsync,
  createDir,
  deleteDir,
  deleteFileAsync,
  fileExists,
  listDir,
  readFileAsync,
  writeFileAsync,
} from "./src/index.js";

(async () => {
  try {
    console.log(await writeFileAsync("example.txt", "Hello, World!"));
    console.log(await readFileAsync("example.txt"));
    console.log(await appendFileAsync("example.txt", "\nAppending some text."));
    console.log(await readFileAsync("example.txt"));
    console.log(
      (await fileExists("example.txt"))
        ? "File exists."
        : "File does not exist."
    );
    console.log(await copyFileAsync("example.txt", "example_copy.txt"));
    console.log(await createDir("testDir"));
    console.log(await listDir("testDir"));
    console.log(await deleteDir("testDir"));
    console.log(await deleteFileAsync("example.txt"));
    console.log(await deleteFileAsync("example_copy.txt"));
  } catch (err) {
    console.error(err.message);
  }
})();
