const express = require("express");
const  mongoose = require('mongoose');
const ejs = require("ejs");

const app = express();

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("public"));

app.listen(3000, function() {
  console.log("Server started on port 3000");
});