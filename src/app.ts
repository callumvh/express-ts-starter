import "source-map-support/register";
import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello cal!");
});

app.listen(3000, () => {
  console.log("Server listening on port 3001");
});
