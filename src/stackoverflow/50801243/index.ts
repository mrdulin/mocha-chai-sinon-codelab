import axios from "axios";

export class MyClass {
  fetch() {
    return axios.get("/test", {
      params: { start: "2018-01-01", end: "2018-01-30" }
    });
  }
}
