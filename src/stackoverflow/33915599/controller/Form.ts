import model from "../models/Form";

let content;

export default class Form {
  constructor(app) {
    content = new model(app.settings.content);
  }
}
