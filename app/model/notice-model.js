const schema = require("../../config/schema");
const mongoose = require('mongoose');
const Notice = mongoose.model('Notice');

exports.getAll = (callback)=>{
    Notice
    .find({})
    .then(data =>{
        return callback(data);
    })
    .catch(err =>{
        return callback(err);
    });  
}
exports.setNotice = (noticia, result) => {
    console.log(noticia)
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

/*
exports.getAll = (callback)=>{
    connect.query('SELECT * FROM noticias', function(err, rows){
        if (err) {
            console.log(err)
            return err
        }
        console.log("Sucesso!");
        return callback(rows)
    })
}
exports.getOne = (id, callback) => {
    connect.query('SELECT * FROM noticias WHERE id_noticia = ?', id, (err, rows) => {
        if (err) {
            console.log(err)
            return err
        }
        else {
            console.log("Sucesso!");
            return callback(rows);
        }
    })
}

exports.setNotice = (noticia) => {
    connect.query('INSERT INTO noticias set?', noticia, (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log("insert success");
        }
    })
}

exports.putNotice = (noticia, id) => {
    connect.query('UPDATE noticias set ? WHERE id_noticia = ?', [noticia, id], (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log("update success");
        }
    })
}

exports.delete = (id) => {
    connect.query('DELETE FROM noticias WHERE id_noticia = ?', id, (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log("delete success");
        }
    })
} */
