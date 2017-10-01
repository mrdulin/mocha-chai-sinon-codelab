import fs from "fs";

export function fsExists(cb) {
  fs.exists("some dir", (exists: boolean) => {
    if (!exists) {
      cb("file does not exist");
      return;
    }
    cb("do something");
  });
}
