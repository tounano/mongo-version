var MongoClient = require('mongodb').MongoClient;
var mongoVersion = require('../');
MongoClient.connect('MONGODB CONNECT STRING', function (err, db) {
  mongoVersion(db, function (err, ver) {
    console.log(err, ver);
  })
})