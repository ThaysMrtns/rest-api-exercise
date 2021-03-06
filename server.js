const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database('./database.db');
const express = require('express'); //Biblioteca express
const app = express(); //Servidor
const port = 8080; //Porta
const BodyParser = require('body-parser'); //Middleware

const fetch = require('node-fetch');
const cors = require('cors');


app.use(cors()); //Utilizando o cors
app.use(BodyParser.json()); //Utilizando o Middleware

fetch("http://localhost:8080/tarefas")
.then ((response) => {response.json()})
.then ((data) => console.log(data))
/*response.json().then(data => {
    console
  });*/

//Rotas read
app.get("/tarefas/:id", (req, resp) => {
    db.get(`SELECT * FROM TAREFAS where id = ?`, [req.params.id], 
    (err, tarefas) => { 
        resp.send(JSON.stringify({results: tarefas})); //Trafegar dados como string num formato de objeto
    });
});

app.post("/tarefas/:id", (req, resp) => {
   db.run(`INSERT INTO TAREFAS (titulo, descricao, status) VALUES (?, ?, ?)`, 
   [req.body.titulo,req.body.descricao,req.body.status], 
   (err) =>{
        if(err){
            console.log("Erro ao inserir tarefas no banco de dados");
        }
   });
   resp.send("Post concluido");
    //O body é onde inserimos o que queremos enviar de informação
})

app.delete("/tarefas/:id", (req, resp) =>{
    db.run(`DELETE FROM TAREFAS WHERE id = ?`, [req.params.id])
    resp.send("Delete concluido");
});

app.put("/tarefas/:id", (req, resp) => {
    db.run(`UPDATE TAREFAS SET titulo = ?, descricao = ?, status = ? WHERE id = ? `, [req.body.titulo, req.body.descricao, req.body.status, req.params.id]);
    resp.send("Update concluido");
});

//Tomada do servidor
app.listen(port, () =>{
    console.log(`Servidor funcionando na porta ${port}`);
});

//Encerrar banco
process.on('SIGINT', ()=> {
    db.close((err) => {
        console.log("Banco encerrado com sucesso!");
        process.exit(0);
    });
});