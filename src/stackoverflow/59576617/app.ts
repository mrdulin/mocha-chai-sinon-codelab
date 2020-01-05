import express from "express";

const app = express();

app.get("/project/export", (req, res) => {
  res.end();
});

export default app;
