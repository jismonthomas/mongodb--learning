var express = require('express');
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 3000;

var mongoose = require('./db/mongoose').mongoose;
var ObjectID = require('mongodb').ObjectID;

var {Todo} = require('./models/todo');

var {User} = require('./models/user');

var {authenticate} = require('./middleware/authenticate');

var app = express();

app.use(bodyParser.json());

app.post('/todos',function(req, res){
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then(function(result) {
    res.send(result);
  }, function(err) {
    res.status(400).send(err);
  });
});


app.get('/todos',function(req, res){
  Todo.find().then(function(result){
    res.send(result);
  });
},
function(err){
  res.status(400).send(err);
});

app.get('/todos/:id', function(req, res){
   var id = req.params.id;
  if (!ObjectID.isValid(id)) {
    return console.log("id is not valid");
  }
  else {
    console.log(id + " is a valid");
  }
  Todo.findById(id).then(function(result){
    res.send(result);
  },
  function(err) {
    console.log("error", err);
  });
});

app.get('/todos/delete/:id',function(req, res) {
  var id = req.params.id;
   if (!ObjectID.isValid(id)) {
     return res.status(404).send();
   }
   else {
     res.send(id + " is a valid");
   }
   Todo.findByIdAndRemove(id).then(function(todo) {
     res.send(todos);
   },
   function(err) {
     res.status(404).send(err);
 })
},
function(err) {
  res.status(400).send(err);
});


app.get('/users/me', authenticate, function (req, res) {
res.send(req.user); //this is from authenticate
});

app.post('/users', function(req, res) {
  var user = new User({
    email: req.body.email,
    password: req.body.password
  });

  user.save().then(function() {
    return user.generateAuthToken();
  }).then(function(token){
    res.header('x-auth', token).send(user);
  },function(e) {
  res.status(400).send(e);
  })
});

app.listen(PORT,function(){
  console.log('server started at port:' + PORT);
});
