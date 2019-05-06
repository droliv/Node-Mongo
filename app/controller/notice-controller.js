const model = require("../model/notice-model");

exports.get = (req, res) => {
    model.getAll((result)=>{
        if(result.length == 0){
            res.send("Não há resultados para esta consulta")
        }
        else{
            res.send(result);
        }
    })
}

exports.getone = (req, res) => {
    const id = req.params.id;
    model.getOne(id,(result)=>{
        if(result.length == 0){
            res.send("Não há resultados para esta consulta")
        }
        else{
            res.send(result);
        }
        
    })
}
exports.post = (req, res) => {
    const noticia = req.body;
    console.log(noticia);
    model.setNotice(noticia,(result)=>{
        if (result == "success"){
            res.send("insert sucess");
        }
        else{
            res.send("Falha ao inserir");
        }
    })
}

exports.put = (req, res) => {
    const noticia = req.body;
    const id = req.params.id;
    model.putNotice(noticia, id, (result)=>{
        if (result == "success"){
            res.send("update sucess");
        }
        else{
            res.send("Falha ao alterar");
        }
    });
}

exports.delete = (req, res) => {
    const id = req.params.id;
    model.delete(id,(result)=>{
        if (result == "success"){
            res.send("Delete sucess");
        }
        else{
            res.send("Falha ao excluir");
        }
    });
}
