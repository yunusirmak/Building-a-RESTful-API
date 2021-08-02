const express = require("express");
const  mongoose = require('mongoose');
const ejs = require("ejs");

mongoose.connect('mongodb://localhost:27017/wikiDB', {useNewUrlParser:  true, useUnifiedTopology:  true});

const app = express();

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("public"));

const  articleSchema = {
	name:  String,
  content: String
};

const Article = mongoose.model("Article", articleSchema);

app.listen(3000, function() {
  console.log("Server started on port 3000");
});