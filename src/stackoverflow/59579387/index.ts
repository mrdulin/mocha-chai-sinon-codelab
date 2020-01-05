export function ensurePathFormat(filePath: string, test = false) {
  console.log(test);
  if (!filePath || filePath === "") {
    if (test) {
      throw new Error("Invalid or empty path provided");
    } else {
      console.error("Invalid or empty path provided");
      process.exit(1);
    }
  }
}
