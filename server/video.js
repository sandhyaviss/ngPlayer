const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const videoSchema = new Schema({
    title:String,
    url: String,
    description: String
});

// creates model its parameter name , schema name, collection name in mlab
module.exports = mongoose.model('video', videoSchema, 'videos','videos');