export const logger = {
  warn(message) {
    console.warn(message);
  },
};

export const yaml = {
  safeLoad(file, callback) {},
};

export const fsExtra = {
  readFileSync(filepath, options) {},
};

export function main() {
  const filepath = "./.tmp/sinon.js";
  const file = yaml.safeLoad(fsExtra.readFileSync(filepath, "utf8"), (err) => {
    logger.warn(err);
  });
}
