const EscolhaInstrumento = document.getElementById('EscolhaInstrumento')

//funçao pra conferir qual instrumento esta sendo selecionado
function mostrar(corda) {
    if (corda === 'violino') {
        const AlunoProfessorViolino = document.getElementById('AlunoProfessorViolino')
        EscolhaInstrumento.style.display = "none"
        AlunoProfessorViolino.style.display = "block"
    } else if (corda === 'viola') {
        const AlunoProfessorViola = document.getElementById('AlunoProfessorViola')
        EscolhaInstrumento.style.display = "none"
        AlunoProfessorViola.style.display = "block"
    } else if (corda === 'cello') {
        const AlunoProfessorCello = document.getElementById('AlunoProfessorCello')
        EscolhaInstrumento.style.display = 'none'
        AlunoProfessorCello.style.display = 'block'
    }
}
//funçao pra conferir qual instrumento esta sendo selecionado


//--------VIOLINO----------

//codigo para ir pro formulario alunoViolino
function irPraAlunoViolino() {
    window.location.href = "violino/Aluno/Aluno.html"
}

//funçao para ir pro formulario PorfessorViolino
function irPraProfessorViolino() {
    window.location.href = "violino/Professor/Professor.html"
}

//--------VIOLINO----------



//--------VIOLA----------

//codigo para ir pro formulario alunoViola
function irPraAlunoViola() {
    window.location.href = "viola/AlunoViola/AlunoViola.html"
}

function irPraProfessorViola() {
    window.location.href = "viola/ProfessorViola/ProfessorViola.html"
}


//--------VIOLA----------


//cello
function cello() {
    const AlunoProfessorCello = document.getElementById('AlunoProfessorCello')
    EscolhaInstrumento.style.display = "none"
    AlunoProfessorCello.style.display = "block"
}





//codigo do botao de voltar
function voltar() {
    AlunoProfessorCello.style.display = "none"
    AlunoProfessorViola.style.display = "none"
    AlunoProfessorViolino.style.display = "none"

    EscolhaInstrumento.style.display = "block"
}

//codigo pra voltar pra pagina anterior
function voltarPaginaAnterior() {
    window.location.href = "/escolherNaipe.html"
}