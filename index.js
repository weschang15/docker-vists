import express from "express";
import redis from "redis";

const client = redis.createClient();
const app = express();

app.get("/", (req, res, next) => {
  res.send("hello");
});

const server = app.listen(app.get("port"), () => {
  console.log(`Server listening on localhost:${server.address().port}`);
});
