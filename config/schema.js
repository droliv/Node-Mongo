const connect = require("./connect");
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const schema = new Schema({
    title:{
        type: String,
        required: false
    },
    resumo:{
        type: String,
        required: false
    },
    autor:{
        type: String,
        required: false
    },
    data:{
        type: String,
        required: false
    }

});




module.exports = mongoose.model('Notice', schema);