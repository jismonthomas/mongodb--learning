//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // object destructuring method

MongoClient.connect('mongodb://localhost:27017/TodoApp',function(err, db) {
  if(err) {
    return console.log("Unable to connect to mongodb server");
  }
  console.log('Connected to MongoDB sever');

  // db.collection('Todos').find({completed: false}).toArray().then(function(docs){
  //   console.log("Todos");
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, function(err) {
  //   console.log('unable to fetch todos',err);
  // });

  db.collection('Todos').find().count().then(function(count){
    console.log("Todos");
    console.log('count:', count);
  }, function(err) {
    console.log('unable to fetch todos',err);
  });

  //db.close();
});
