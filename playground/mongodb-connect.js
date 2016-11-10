//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // object destructuring method

MongoClient.connect('mongodb://localhost:27017/TodoApp',function(err, db) {
  if(err) {
    return console.log("Unable to connect to mongodb server");
  }
  console.log('Connected to MongoDB sever');


  // db.collection('Todos').insertOne({
  //   text: 'something to do',
  //   completed: false
  // }, function (err, result){
  //   if (err) {
  //     return console.log('unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: "Jismon Thomas",
  //   age: 25,
  //   location: "Canada"
  // }, function(err, result){
  //   if (err) {
  //     return console.log('unable to insert into users', err);
  //   }
  //   console.log(result.ops);
  // });

  db.close();
});
