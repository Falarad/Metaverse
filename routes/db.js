var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');
//mongoose.connect('mongodb://127.0.0.1:27017/Metaverse', {useNewUrlParser: true, useUnifiedTopology: true, keepAliveInitialDelay: 300000});
mongoose.connect(process.env.DB_URI, {useNewUrlParser: true, useUnifiedTopology: true, keepAliveInitialDelay: 300000});
var db = mongoose.connection;
const characterSchema = new mongoose.Schema({
    name: String,
    owner: String,
    charTemplate: String,
    body: Object,
    dateOfCreation: Date,
    lastUpdate: Date
});
const worldSchema = new mongoose.Schema({
    name: String,
    owner: String,
    body: Object,
    dateOfCreation: Date,
    lastUpdate: Date
});
const postSchema = new mongoose.Schema({
    name: String,
    owner: String,
    postTemplate: String,
    body: Object,
    dateOfCreation: Date,
    lastUpdate: Date
});
const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    displayname: String,
    username: String,
    follows: Object,
    linked: Object,
    liked: Object,
    lastUpdate: Date,
    dateOfCreation: Date
});
userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(24), null);
};
userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
};
var models = {};
models.Char = mongoose.model('characters', characterSchema);
models.World = mongoose.model('worlds', worldSchema);
models.Post = mongoose.model('posts', postSchema);
models.User = mongoose.model('users', userSchema);
var cornelius = new models.Char({name: "Cornelius & Augustus", body: {deceive: "+4"}, dateOfCreation: new Date(), lastUpdate: new Date(), owner: "Miguel Pimentel", postTemplate: "Blog"});
var migueljp = new models.User({email:'pimentel611@gmail.com', displayname:'AllGayLord', username:'falarad', pass:'ykjh', follows:{}, linked:{}, liked:{}, dateOfCreation: new Date(), lastUpdate: new Date()});
module.exports = models;
