var mongo = require('mongodb');
var Mongoclient = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017/";

Mongoclient.connect(url, function (err, db) {
    if (err) throw err;

    var dbo = db.db("Jomoflash")  //Switch to Jomoflash Database
    console.log(`Swithched to ${dbo.databaseName} database`);

    var documentsData = [
        {
            movie: "The banker",
            year: "2020",
            rating : 8
        },
        {
            movie: "Bad Boys",
            year: "2020",
            rating : 7
        },
        {
            movie: "The Hunt",
            year: "2020",
            rating : 7
        },
        {
            movie: "Bloodshot",
            year: "2020",
            rating : 7.5
        },
        {
            movie: "First Cow",
            year: "2020",
            rating : 6.5
        }
    ];

    //create Collection myMovies
    dbo.createCollection('myMovies', function (err, res) {
        if (err) throw err;
        console.log('myMovies Collection is created');
    });

    dbo.collection("myMovies").insertMany(documentsData, function(err, res) {
        if (err) throw err;
        console.log(res);

        db.close(); //close connection
    });

   
});




// modified here
