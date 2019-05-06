const bodyParser = require("body-parser");
const express = require("express");
const app = new express();
const router = express.Router();
const index = router.get('/',(req,res,next)=>{
    res.status(200).send({
       title:"Curso Node" 
    });
});
app.use(bodyParser.json());
//converter urls
app.use(bodyParser.urlencoded({extended:false}));

app.use('/',index);

module.exports = app;