import * as name from "./file";
import co from "co";

export function* secondFunc(a, b, c) {
  try {
    const x = yield* name.get(a);
    return x;
  } catch (err) {
    console.error(err);
  }
}

export const func = (a, b, c) => co(secondFunc.bind(null, a, b, c));
