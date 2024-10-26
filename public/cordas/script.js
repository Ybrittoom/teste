const EscolhaInstrumento = document.getElementById('EscolhaInstrumento')

//violino
function violino() {
    const AlunoProfessorViolino = document.getElementById('AlunoProfessorViolino')
    EscolhaInstrumento.style.display = "none"
    AlunoProfessorViolino.style.display = "block"
}

//viola
function viola() {
    const AlunoProfessorViola = document.getElementById('AlunoProfessorViola')
    EscolhaInstrumento.style.display = "none"
    AlunoProfessorViolino.style.display = "block"
}

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

//codigo para ir pro formulario alunoViolino
function irPraAlunoViolino() {
    window.location.href = "violino/Aluno/Aluno.html"
}