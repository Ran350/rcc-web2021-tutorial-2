const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

const port = 4000;

let count = 0;

// --- ルートページ ---
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// --- Multi Page Application ---
app.get("/counter", (req, res) => {
  res.render("counter.ejs", { count });
});

app.post("/counter/increment", (req, res) => {
  count += 1;
  res.render("counter.ejs", { count });
});

app.post("/counter/decrement", (req, res) => {
  count -= 1;
  res.render("counter.ejs", { count });
});

// --- API ---
app.get("/count", (req, res) => {
  res.send({ count });
});

app.post("/count/increment", (req, res) => {
  count += 1;
  res.send({ count });
});

app.post("/count/decrement", (req, res) => {
  count -= 1;
  res.send({ count });
});

// --- 404ページ ---
app.get("*", (req, res) => {
  res.status(404).send(`Page is not found`);
});

// --- 接続を待ち受けるときの処理 ---
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
