const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database('./database.db');

//Insira aqui o código da tarefa proposta!
//Apesar de não ser a melhor forma de manter um projeto, utilize apenas esse arquivo. Estamos testando!
const express = require('express'); //Biblioteca express
const app = express(); 
const port = 3000;

//Rotas
app.get("/", (req, resp) => {
    //Resposta
    resp.send("Hello World!");
})

app.get("/tarefas", (req, resp) => {
    db.all(`SELECT * FROM TAREFAS`, (err, tarefas) => {
        //Resposta, lista de todas as tarefas do banco de dados 
        resp.send(tarefas);
    })
})

app.post("/tarefas", (req, resp) => {
    resp.send("POST, requisição funcionando");
})

//Tomada do servidor
app.listen(port, () =>{
    console.log(`Servidor funcionando na porta ${port}`);
})


process.on('SIGINT', ()=> {
    db.close((err) => {
        console.log("Banco encerrado com sucesso!");
        process.exit(0);
    })
})