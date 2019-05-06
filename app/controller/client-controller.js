exports.get = (req,res)=>{
        res.send("get clientes");
}

exports.post = (req,res)=>{
    res.send(req.body);
}

exports.put = (req,res)=>{
    res.send({
        id:req.params.id,
        item: req.body
    });
}

exports.delete = (req,res)=>{
    res.send("get clientes");
}

