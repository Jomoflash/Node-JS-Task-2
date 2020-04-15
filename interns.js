var mongo = require('mongodb');
var Mongoclient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/";

Mongoclient.connect (url, function(err, db) {
    if (err) throw err;

    var dbo = db.db("Jomoflash")
    console.log(`Swithched to ${dbo.databaseName} database`);
    dbo.createCollection('interns', function(err, res) {
        if (err) throw err;
        console.log('Interns Collection is created');
        db.close();
    });
  
})




// modified here
