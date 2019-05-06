const schema = require("../../config/schema");
const mongoose = require('mongoose');
const Notice = mongoose.model('Notice');

exports.getAll = (callback)=>{
    Notice
    .find({}, 'title resumo autor data')
    .then(data =>{
        return callback(data);
    })
    .catch(err =>{
        return callback(err);
    });  
}
exports.getOne = (id, callback) => {
    Notice
    .find({_id:id}, 'title resumo autor data')
    .then(data =>{
        return callback(data);
    })
    .catch(err =>{
        return callback(err);
    });
}
exports.setNotice = (noticia, result) => {
    let notice = new Notice(noticia);
    notice
    .save()
    .then(x =>{
        return result("success");
    })
    .catch(err =>{
        return result(err);
    });
}
exports.putNotice = (noticia, id, callback) => {
    Notice
    .findOneAndUpdate({_id:id}, {
        $set : noticia
    })
    .then(data =>{
        return callback("success");
    })
    .catch(err =>{
        return callback(err);
    });
}

exports.delete = (id, callback) => {
    Notice
    .findOneAndDelete({_id:id})
    .then(x =>{
        return callback("success");
    })
    .catch(err =>{
        return callback(err);
    });
}
