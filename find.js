//  Learn MongoDB
// ───────────────
//  FIND
//  Exercise 3 of 9

// Here we will learn how to search for documents.

// For all of the exercises, the database is learnyoumongo.
// So, the url would be something like: mongodb://localhost:27017/learnyoumongo

// Use the parrots collection to find all documents where age
// is greater than the first argument passed to your script.

// Using console.log, print the documents to stdout.

var mongo = require("mongodb");

var mongoClient = mongo.MongoClient;
var queryUrl = 'mongodb://localhost:27017/learnyoumongo';

var thresholdAge = process.argv[2];

mongoClient.connect(queryUrl, {}, function(err, db) {
    if (err) throw err;
    var col1 = db.collection('parrots');
    col1.find()
        .toArray(function(err, docs) {
            // console.log('Threshold Age is: ' + thresholdAge); 
            docs.forEach(function(item) {
                // console.log('this item\'s age is: ' + item.age);
                if (item.age > thresholdAge) {
                    console.log([item]); // they'r expecting the oboj in an array.. 
                    // I assume because they passed a query oboject to the find method
                    // like {age: 10} or something... so toArray already contained
                    // their filtered array. and then they just console logged it. 
                }
            });
            db.close();
        });
});






// -------------------------------------------------------------------------------

// ## HINTS

// To connect to the database, one can use something like this:

//     var mongo = require('mongodb').MongoClient
//     mongo.connect(url, function(err, db) {
//       // db gives access to the database
//     })

// To get a collection, one can use db.collection('<collection name>').

// To find a document or documents, one needs to call find() on the collection.

// // Find is a little bit different than what we are used to seeing.

// // To access the arguments you can use the process.argv array of strings (the first 
// argument is stored at the third position process.argv[2]). To convert to an integer,
//  you could use parseInt()

// Here is an example:

//     collection.find({
//       name: 'foo'
//     }).toArray(function(err, documents) {

//     })

// If your program does not finish executing, you may have forgotten to
// close the db. That can be done by calling db.close() after you
// have finished.

// ## Resources:

//   * http://docs.mongodb.org/manual/reference/method/db.collection.find/
//   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
