// Mongodb Solution

var mongo = require("mongodb");

var mongoClient = mongo.MongoClient;
var queryUrl = 'mongodb://localhost:27017/learnyoumongo';

var thresholdAge = process.argv[2];
// console.log(thresholdAge); 

mongoClient.connect(queryUrl, function(err, db) {
    // if (err) throw err;
    var col1 = db.collection('parrots');

    // Variables inside query object passed to the collection method 'find' must be
    // prefixed by plus sign. Special mongodb operators must be prefixed by $ I assume. 
    // Syntax: FIELD: {comparison operators: value(s)}
    col1.find({ age: { $gt: +thresholdAge } }).toArray(function(err, docsArr) {
        console.log(docsArr);
        db.close();
    });

});
