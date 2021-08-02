# Building a RESTful API

## Robo 3T
This is a graphical interface for doing some basic stuff on mongodb.

You can download it from here;
https://robomongo.org/

Once the setup is done, just create a connection and connect to it.

**You need to start mongod from the console or else it won't connect.**

## Sample Database

 - Create a database called **wikiDB**
 - Create a collection called **articles**
 - Insert sample documents
 
 sample document example;

     {
        "_id" : ObjectId("6107c949f84b2505c218cd12"),
        "title" : "REST",
        "content" : "REST is short for REpresentational State Transfer. It's an architectural style for desinging APIs."
    }

More document examples;
https://github.com/londonappbrewery/Build-Your-Own-RESTful-API

## Setting up the Server

### Challenges

**1) Create a new Directory called Wiki-API**

Literally just create a folder called Wiki-API inside of your web dev folder.

**2) Initialise NPM and install mongoose, ejs and express**

cd into your Wiki-API folder from the console and initialize npm

    npm init

and after initialising npm, install mongoose, ejs and express

    npm i mongoose ejs express

**3) Create a new file called app.js**

Self-explanatory. 

**4) Inside app.js add the starting server code**

file: app.js
line:1-15
code:
```javascript
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
```

**5) Setup MongoDB**

 - DB name is **wikiDB**
 - Collection name is **articles**
 - Document has 2 fields: **title** and **content**

file: app.js
line:5
code:
```javascript
mongoose.connect('mongodb://localhost:27017/wikiDB', {useNewUrlParser:  true, useUnifiedTopology:  true});
```

file: app.js
line:15-24
code:
```javascript
const  articleSchema = {
	name:  String,
  content: String
};

const Article = mongoose.model("Article", articleSchema);

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
```

Mongo automatically changes the "Article" to "articles" with its algorithm.
