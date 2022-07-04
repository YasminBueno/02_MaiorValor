
let inicio = document.getElementById('BTNenviar')
let limpar = document.getElementById('BTNlimpar')
let resultado = document.getElementById('resul')
let numero1 = document.getElementById('numero1')
let numero2 = document.getElementById('numero2')

inicio.addEventListener('click', Inicio)
function Inicio() {
    n1 = Number(numero1.value)
    n2 = Number(numero2.value)
    MaiorN(n1,n2)
}

function MaiorN(n1,n2) {
    if (n1 > n2) {
        resultado.innerHTML = `Maior: ${n1}`
    } else if (n2 > n1) {
        resultado.innerHTML = `Maior: ${n2}`
    } else {
        resultado.innerHTML = 'Não há maior número'
    }
}

limpar.addEventListener('click', Limpar)
function Limpar() {
    resultado.innerHTML = ''
    numero1.value = ''
    numero2.value = ''
}