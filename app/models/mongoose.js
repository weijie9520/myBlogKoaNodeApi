var mongoose = require("mongoose");
var config = require("../../config/index");
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;
var db = mongoose.createConnection(config.mongoose.url, { useNewUrlParser: true });


// db.Promise = global.Promise;
db.Schema = Schema;

db.on('error', function callback(err) { //监听是否有异常
    console.log(err);
});
db.once('open', function callback() { //监听一次打开
    //在这里创建你的模式和模型
    console.log('success connected!');
});

module.exports = db
