// Mongodb solution

var mongoClient = require('mongodb').MongoClient; // Accidentally required 'mongo'
var thresholdAge = process.argv[2];
var url = 'mongodb://localhost:27017/data'; // does it need to connect to the dbpath? 

mongoClient.connect(url, function(err, db) {
    db.collection('parrots', function(err, coll) {
        coll.find({ age: { $gt: +thresholdAge } })
            // returns all documents in the collection that match the query object.
            .toArray(function(err, docsArr) {
                console.log(Array.isArray(docsArr));
                // see if docsArr exists as array
                debugger;
                var modifiedDocs = docsArr.map(function(doc) {
                    return {
                        name: doc.name,
                        age: doc.age
                    };
                });
                console.log(modifiedDocs);
            });
    });
    db.close(); // once finish with db instance, close out. 
});

// The difference from the last lesson will be that we only want the
// name and age properties

// // COMPLETE without hint. Then check API for methods that would assist. I assume part of
// field object query, or cursor (aggregate) methods permit returning document with modified
// fields. 

// Using console.log, print the documents to stdout.
