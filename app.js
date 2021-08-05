const express = require("express");
const  mongoose = require('mongoose');
const ejs = require("ejs");

mongoose.connect('mongodb://localhost:27017/wikiDB', {useNewUrlParser:  true, useUnifiedTopology:  true});

const app = express();

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const  articleSchema = {
	title:  String,
  content: String
};

const Article = mongoose.model("Article", articleSchema);

app.route("/articles")
  .get(function(req,res){
    Article.find(function(err, foundArticles) {
      if(!err){
        res.send(foundArticles);
      } else {
        res.send(err);
      }
    })
  })
  .post(function(req,res) {

    const newArticle= new Article({
      title: req.body.title,
      content: req.body.content
    })
    newArticle.save(function(err) {
      if(!err){
        res.send("Successfully added a new article.")
      }else{
        res.send(err);
      }
    });
  })
  .delete(function(req,res) {
    Article.deleteMany(function(err) {
      if(!err){
        res.send("Successfully deleted all articles.");
      } else{
        res.send(err);
      }
    })
  });

  app.route("/articles/:articleTitle")
    .get(function(req,res) {
      Article.findOne({title: req.params.articleTitle}, function(err, foundArticle) {
        if(!err){
          res.send(foundArticle)
        }else(
          res.send("No articles matching that title was found.")
        )
        
      })
    })

    .put(function(req,res) {
      Article.updateMany(
        {title: req.params.articleTitle},
        {$set: {title: req.body.title, content: req.body.content} },
        function(err) {
          if(!err){
            res.send("Successfully updated article. (PUT)");
          }
        }

      )
      
    })

    .patch(function(req,res) {
      Article.updateMany(
        {title: req.params.articleTitle},
        {$set: req.body},
        function(err) {
          if(!err){
            res.send("Successfully updated article...");
          } else{
            res.send(err);
          }
        }
      );
    });

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
