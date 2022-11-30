
let email = document.querySelector('#email')
let erroEmail = document.querySelector('#erroEmail')

let assunto = document.querySelector('#assunto')
let erroAssunto = document.querySelector('#erroAssunto')

let emailOk = false
let assuntoOk = false

let mapa = document.querySelector('#mapa')


function validaEmail() {
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        erroEmail.innerHTML = "Email inválido"
        emailOk = false
    } else {
        erroEmail.innerHTML = ''
        emailOk = true
    }

}

function validaAssunto() {
    if (assunto.value.length > 5) {
        erroAssunto.innerHTML = "Limite de caracter excedido"
        assuntoOk = false
    } else {
        erroAssunto.innerHTML = ""
        assuntoOk = true


    }

}
function enviar() {
    if ( emailOk && assuntoOk) {
        alert('Email enviado com sucesso!')
    } else {
        alert('Preencha as informações correta.')
    }
}

function mapaZoom() {
    mapa.style.width = '500px'
    mapa.style.height = '300px'
}

function mapaNormal() {
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}