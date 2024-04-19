const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());


var aluno = {
    nome: 'Vicente',
    matricula: 31400,
    curso: 'ADS'
}

app.get("/", (req, res)=>{
    res.send(aluno);
});

app.post("/", (req, res)=>{
    console.log(req.body);
    res.send("ok");
});



app.listen(8000, ()=>{
    console.log('Funcionou, servidor rodando no 8000');
});

