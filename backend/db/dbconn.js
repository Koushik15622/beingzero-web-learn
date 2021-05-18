var mongoose = require('mongoose');

module.exports.connect = function(){
    var p=process.env.MONGO_PASSWORD;
    //console.log("in dbconn");
    var s="mongodb+srv://aDm1n:"+p+"@cluster0.lwfsx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    var dbops = {useUnifiedTopology: true,useNewUrlParser: true}
    mongoose.connect(s,dbops);
    var db = mongoose.connection;
    db.on('connected', function() {
    console.log("Successfully connected to MongoDB!");
    });

    db.on('error',function(err){
        console.log('connect error:'+err);
    })
    db.on('disconnected',function(){
        console.log('disconnected');
    })
}