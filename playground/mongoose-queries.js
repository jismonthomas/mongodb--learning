const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id ='5826181eed36d8bd14b59a63';

// Todo.find({
//   _id: id
// }).then(function(todos){
//   console.log('todos: ',todos);
// });

Todo.findById(id).then(function(todos){
  console.log('todos: ',todos);
},
function(err) {
  console.log("error", err);
});
