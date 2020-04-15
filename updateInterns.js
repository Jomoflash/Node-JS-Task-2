var MongoClient = require("mongodb").MongoClient;

var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;

    var dbo = db.db("Jomoflash")  //Switch to Jomoflash Database
    console.log(`Swithched to ${dbo.databaseName} database`);

    var myQuery = { movie : "The banker" };
    var newValues = { $set : {movie : "Avengers"}};

    dbo.collection("myMovies").updateOne(myQuery, newValues, function(err, res){
        if (err) throw err;
        console.log(res);
        console.log("Movie title updated");
        db.close();
    });
});
