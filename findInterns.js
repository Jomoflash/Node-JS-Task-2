var MongoClient = require("mongodb").MongoClient;

var url =  "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;

    var dbo = db.db("Jomoflash")  //Switch to Jomoflash Database
    console.log(`Swithched to ${dbo.databaseName} database`);

    var query = { rating : 7 };

    dbo.collection("myMovies").find(query).toArray(function(err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});
