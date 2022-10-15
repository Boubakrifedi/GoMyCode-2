const express = require("express");

const app = express();
const myLogger = function (req, res, next) {
const d = new Date();
let hour = d.getHours();
let day = d.getDay();
if ((day >=1 && day <=5) ) {
  console.log("working days")
  if((hour >=9 && hour <=17 )) {
    console.log("working hours")
    next()
  } 
}
else {
  console.log("be back in working hours")
}
}

app.use(myLogger);
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "public/index.html");
});

app.get("/service", (req, res) => {
  res.sendFile(__dirname + "public/service.html");
});

app.get("/contact", (req, res) => {
  res.sendFile(__dirname + "public/contact.html");
});

const port = 5000;
app.listen(port, () => console.log(`server runningon ${port}`));


