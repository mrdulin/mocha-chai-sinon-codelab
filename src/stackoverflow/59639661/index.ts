export async function getOperations(customObj, store) {
  const obj = foo(customObj, store);
  return obj;
}

export function foo(customObj, store) {
  return store.peekRecord("obj", 12345);
}
