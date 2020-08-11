const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
const routerThread = require("./src/routes/thread");


app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

app.get("/", (req,res) => res.send("Home"));
app.use("/thread",routerThread)


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
