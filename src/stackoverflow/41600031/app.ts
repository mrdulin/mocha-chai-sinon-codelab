import express from "express";
import * as controller from "./controller";

const app = express();

app.post("/foo", controller.foo);

export { app };
