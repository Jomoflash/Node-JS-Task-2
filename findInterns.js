var MongoClient = require("mongodb").MongoClient;

var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;

    var dbo = db.db("Jomoflash")  //Switch to Jomoflash Database
    console.log(`Swithched to ${dbo.databaseName} database`);

    dbo.collection("myMovies").find({}, { projection: { _id: 0, movie :1 } }).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});
