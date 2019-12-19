import express from "express";

const app = express();
const port = 3000;
const http = require("http").createServer(app);

app.post("/api/v1/workspace", (req, res) => {
  res.sendStatus(200);
});

if (require.main === module) {
  http.listen(port, () => {
    console.log("Server is running on port " + port);
  });
}

export default app;
