const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

let count = 0;

app.get("/count/increment", (req, res) => {
  count += 1;
  res.send({ count });
});

app.get("/count/decrement", (req, res) => {
  count -= 1;
  res.send({ count });
});

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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
