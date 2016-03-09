// Mongodb Solution

var mongo = require("mongodb");

var mongoClient = mongo.MongoClient;
var queryUrl = 'mongodb://localhost:27017/learnyoumongo';

var thresholdAge = process.argv[2];
// console.log(thresholdAge); 

mongoClient.connect(queryUrl, function(err, db) {
    // if (err) throw err;
    var col1 = db.collection('parrots');

//ONLY NEW TEST IS USING TREHSOLD AGE INSTEAD OF A FIXED VALUE... 
// THATS WHY, VARIABLES PROBABLY NEED A PLUS SIGN... I BET.. 
//THAT'S IT god. I wonder if thats mongodb API specific or JS standard...
// it's so not JS standard. JS objects can accept normal variable names for
// object properties.
    col1.find({age:{$gt:+thresholdAge}}).toArray(function(err, docsArr) {
        console.log(docsArr); 
        db.close();
    });

});
// too many cursor ops?
// replaced tresholdAge with fixed val
// 



//     col1 //  .rewind()   // did I need to add rewind to reset the cursor? 
//     .find({ age: { $gt: thresholdAge } }) // obj literal doesn't need quotations.. 
//         .toArray(function(err, docs) {
//             console.log('toArray was called..');
//             docs.forEach(function(val) {
//                     console.log(val); //should only print the 1 coll doc that passes query obj. 
//                 })
//                 // docs.forEach(function(item) {    // remember they wanted the single item in arr...
//                 //     console.log(item); 
//                 // });
//             db.close();
//         });
// });

// only works when i hard del data dir. 






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
