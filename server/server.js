var express = require('express');
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 3000;

var mongoose = require('./db/mongoose').mongoose;

var {Todo} = require('./models/todo');

var {Users} = require('./models/users');

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

app.listen(PORT,function(){
  console.log('server started at port:' + PORT);
});

// var newTodo = new Todo({
//   text: 'cook dinner'
// });

// newTodo.save().then(function(doc){
//   console.log('saved', doc);
// },function(err){
//   console.log("unable to save");
// });

// var otherTodo = new Todo({
//   text: 'study hard',
//   completedAt: 25
// });
//
// otherTodo.save().then(function(result){
//   console.log("saved :", result);
// },
// function(err){
//   console.log("unable to save : ", err);
// });

// var userData = new Users({
//   email: "jismonthomas@gmail.com"
// });
//
// userData.save().then(function(result) {
//   console.log("saved :", result);
// }, function(err) {
//   console.log("unable to save", err);
// });
