let iconoMenu = document.getElementById('icono-menu');
let nav = document.getElementById('nav');
let opcionesMenu = document.querySelectorAll('.nav-link');

iconoMenu.addEventListener('click', function(){
    if (nav.classList.contains('mostrar')) {
        nav.classList.remove('mostrar');
        nav.classList.add('cerrar');
    } else {
        nav.classList.add('mostrar');
        nav.classList.remove('cerrar');
    }
});

opcionesMenu.forEach(function(opcion) {
    opcion.addEventListener('click', function() {
        nav.classList.remove('mostrar');
        nav.classList.remove('cerrar'); 
    });
});
