
const mongoose = require('mongoose');

// Replace with your actual MongoDB URI
const dbUrl = "mongodb+srv://kausarul:<KausarulDBmekanbul>@cluster0.zqkiyln.mongodb.net/?appName=Cluster0";

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', function () {
    console.log('MongoDB bağlantısı başarılı!');
});

mongoose.connection.on('error', function (err) {
    console.log('MongoDB bağlantı hatası:', err);
});

mongoose.connection.on('disconnected', function () {
    console.log('MongoDB bağlantısı kesildi.');
});

process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        console.log('MongoDB bağlantısı uygulama sonlandırma nedeniyle kapatıldı.');
        process.exit(0);
    });
});


/*
kapat=function(msg,callback){
    mongoose.connection.close(function(){
        console.log("Bağlantı Kapatıldı"+msg);
        callback();
    });
    process.on("SIGINT",function(){
        kapat("Uygulama Kapatıldı",function(){
            process.exit(0);
        });
    });
};
*/

require("./venue");

