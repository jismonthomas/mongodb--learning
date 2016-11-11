//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // object destructuring method

MongoClient.connect('mongodb://localhost:27017/TodoApp',function(err, db) {
  if(err) {
    return console.log("Unable to connect to mongodb server");
  }
  console.log('Connected to MongoDB sever');

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('582516fb4015dade85bf09b2')
  }, {
    $set: {
      name: "Jismon Thomas"
    },
    $inc: {
      age: -30
    }
  }, {
    returnOriginal: false
  }).then(function(result) {
    console.log(result);
  }, function(err) {
    console.log('unable to fetch todos',err);
  });

  //db.close();
});
