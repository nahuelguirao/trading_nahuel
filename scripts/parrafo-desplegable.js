const flecha1 = document.getElementById('flechita-1')
const flecha2 = document.getElementById('flechita-2')
const flecha3 = document.getElementById('flechita-3')

const p1 = document.getElementById('parrafo-1')
const p2 = document.getElementById('parrafo-2')
const p3 = document.getElementById('parrafo-3')


flecha1.addEventListener('click', function() {
    mostrarOcultar(p1)
})

flecha2.addEventListener('click', function() {
    mostrarOcultar(p2)
})

flecha3.addEventListener('click', function() {
    mostrarOcultar(p3)
})

function mostrarOcultar(parrafo){
    if (parrafo.style.display === 'block'){
        parrafo.style.display = 'none'
    } else {
        parrafo.style.display = 'block'
    }
}