// eslint-disable-next-line
export const testA = async () => {
  setTimeout(() => {
    console.count("testA");
    testA();
  }, 1000);
};
