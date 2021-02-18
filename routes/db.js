var mongoose = require('Mongoose');
//mongoose.connect('mongodb://127.0.0.1:27017/Metaverse', {useNewUrlParser: true, useUnifiedTopology: true, keepAliveInitialDelay: 300000});
mongoose.connect(process.env.DB_URI, {useNewUrlParser: true, useUnifiedTopology: true, keepAliveInitialDelay: 300000});
var db = mongoose.connection;
const postSchema = new mongoose.Schema({
    name: String,
    body: Object,
    dateOfCreation: Date,
    lastUpdate: Date,
    owner: String,
    postTemplate: String,
    type: String
});
var models = {};
models.Char = mongoose.model('posts', postSchema);
var cornelius = new models.Char({name: "Cornelius & Augustus", body: {deceive: "+4"}, dateOfCreation: new Date(), lastUpdate: new Date(), owner: "Miguel Pimentel", postTemplate: "Blog", type:"Character"});
module.exports = models;
