//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // object destructuring method

MongoClient.connect('mongodb://localhost:27017/TodoApp',function(err, db) {
  if(err) {
    return console.log("Unable to connect to mongodb server");
  }
  console.log('Connected to MongoDB sever');

  db.collection('Users').deleteMany({name: 'Jismon Thomas'}).then(function(result) {
    console.log(result);
  });

  //db.close();
});
