//codigo pra voltar pra pagina anterior
function voltarPaginaAnterior() {
    window.location.href = "/escolherNaipe.html"
}

const divCodigoDeAdesao = document.getElementById("divCodigoDeAdesao")
const resposta = document.getElementById("resposta")
const RegistroProfessor = document.getElementById("RegistroProfessor")

function verificarCodigoDeFunçao() {
    const codigoDeAdesao = document.getElementById("codigoDeAdesao").value    

    const codigoAdesaoRegex = /^196$/

    if (codigoAdesaoRegex.test(codigoDeAdesao)) {
        resposta.textContent = "Carregando..."

        setTimeout(() => {
            divCodigoDeAdesao.style.display = "none"
            RegistroProfessor.style.display = "block"
        }, 5000);

    } else {
        resposta.textContent = "CODIGO INVALIDO!!!!!"
    }
}