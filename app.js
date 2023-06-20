const express = require("express");
const bodyParse = require("body-parser");
const http = require("http");
const mongoose = require("mongoose");

const studentsRouter = require("./routes/students");
const app = express();
const port = process.env.port || 3000;
const server = http.createServer(app);

mongoose
  .connect(
    "mongodb+srv://winco1125:5540lUYN5UBuAdvs@cluster0.dmsaq4j.mongodb.net/"
  )
  .then(() => {
    console.log("connected to server");
  })
  .catch(() => {
    console.log("Error, cannot connect to server");
  });

app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: false }));

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Origin, X_Requested-With, Content-Type, Accept, authorization"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, PATCH, DELETE, OPTIONS, PUT"
//   );
//   next();
// });

app.use("/", studentsRouter);

app.set("port", port);

server.listen(port);
