const mongoose = require('mongoose')

const urlSchema = new mongoose.Schema({
    originalURL : {
        type : String,
        required : true
    },
    shortID : {
        type : String,
        required : true,
    },
    visitHistory : [{timestamps : {type : Number}}],
    createdBy : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'users'
    }
}, {timestamps : true});

const URL = mongoose.model("url", urlSchema);

module.exports = URL;