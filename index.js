import express from "express";
import redis from "redis";
import process from "process";
const { PORT } = process.env;

const app = express();
app.set("port", PORT || 5764);

const client = redis.createClient({
  host: "redis-server",
  port: 6379
});

client.set("visits", 0);
app.get("/", (req, res, next) => {
  process.exit(0);
  client.get("visits", (err, visits) => {
    res.send(`Number of visits: ${visits}`);
    client.set("visits", Number(visits) + 1);
  });
});

const server = app.listen(app.get("port"), () => {
  console.log(`Server listening on localhost:${server.address().port}`);
});
