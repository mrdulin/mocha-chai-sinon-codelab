export function getList(id) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([]);
    }, 5000);
  });
}
