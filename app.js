//pegando as dependencias
const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const path = require('path')
const e = require('express')
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

//serve os arquivos estaticos (html, css e js)
app.use(express.static(path.join(__dirname, 'public')))


//funçao para salvar os dados em json 
function salvarDadosEmJson(filePath, newData, res) {
    fs.readFile(filePath,'utf8', (err, data) => { // lendo o arquivo
        if (err) {
            console.log("Erro ao ler o arquivo:", err)
            res.status(500).send('Erro no servidor')
            return
        } 

        const db = data ? JSON.parse(data) : [] //E uma forma de operaçao condicional em js,
                                                //usando o operador ternario

        db.push(newData)

        fs.writeFile(filePath, JSON.stringify(db, null, 2), (err) => { //escrevendo os dados em json
            if (err) {
                console.log('Erro ao salvar o arquivo:', err)
                res.status(500).send('Erro no servidor ')
                return
            }

            res.send(`
                <h1>Dados salvos com sucesso, DEUS ABENÇOE!</h1>
                <a href="/">Voltar para a pagina inicial</a>
                `)
        })
    })
}

//rota para VIOLINO ALUNO
app.post('/ViolinoAluno/registroAluno', (req, res) => {
    const alunoData = {
        nome: req.body.nome,
        licoes: req.body.licoes,
        TotalLicoes: req.body.TotalLicoes,
        hinos: req.body.hinos,
        TotalHinos: req.body.TotalHinos,
        observacao: req.body.observacao,
        professor: req.body.professor
    }

    salvarDadosEmJson(path.join(__dirname, 'db/violino/ViolinoAluno.json'), alunoData, res)
})


//rota para VIOLINO PROFESSOR 
app.post('/ViolinoProfessor/registroProfessor', (req, res) => {
    const professorData = {
        nome: req.body.nome,
        codigo: req.body.codigo,
        TotalAlunos: req.body.TotalAlunos, // Corrigido para corresponder ao HTML
        HoraChegada: req.body.hora_de_chegada, // Corrigido para corresponder ao HTML
        HoraSaida: req.body.hora_de_saida,
        data: req.body.data
    }

    salvarDadosEmJson(path.join(__dirname, 'db/violino/ViolinoProfessor.json'), professorData, res)
})

//rota para VIOLA ALUNO
app.post('/ViolaAluno/registroAluno', (req, res) => {
    const alunoData = {
        nome: req.body.nome,
        licoes: req.body.licoes,
        TotalLicoes: req.body.TotalLicoes,
        hinos: req.body.hinos,
        TotalHinos: req.body.TotalHinos,
        observacao: req.body.observacao,
        professor: req.body.professor
    }
    salvarDadosEmJson(path.join(__dirname, 'db/viola/ViolaAluno.json'), alunoData, res)
})

// rota para VIOLA PROFESSOR 
app.post('/ViolaProfessor/registroProfessor', (req, res) => {
    console.log('Recebido POST em /ViolaProfessor/registroProfessor');
    const professorData = {
        nome: req.body.nome,
        codigo: req.body.codigo,
        TotalAlunos: req.body.TotalAlunos, // Corrigido para corresponder ao HTML
        HoraChegada: req.body.hora_de_chegada, // Corrigido para corresponder ao HTML
        HoraSaida: req.body.hora_de_saida,
        data: req.body.data
    }
    salvarDadosEmJson(path.join(__dirname, 'db/viola/ViolaProfessor.json'), professorData, res)
})



//iniciar o servidor brabo
app.listen(port, () => {
    console.log(`Servidor rodando na porta http://localhost:${port}`)
})