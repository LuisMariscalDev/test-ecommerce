const overlay = document.querySelector('#overlay');
const menu = document.querySelector('#menu');
const cerrar = document.querySelector('#cerrar');
const btnMenos = document.querySelector('#menos');
const btnMas = document.querySelector('#sumar');
const cuenta = document.querySelector('.cuenta');
const cart = document.querySelector('.carrito');
const cartContent = document.querySelector('.carrito__evo');
const agregar = document.querySelector('#agregar__carrito');
let cuentaCarrito = 0;
let currentIndex = 0;

menu.addEventListener('click', () => {
    overlay.classList.add('visible');
    menu.style.display = 'none';
})

cerrar.addEventListener('click', () => {
  overlay.classList.remove('visible');
  menu.style.display = 'block';
})
cart.addEventListener('click', () => {
  cartContent.classList.toggle('carrito__switch'); // Alternar la clase invisible
});


btnMas.addEventListener('click', () => {
    cuentaCarrito++;
    cuenta.innerHTML = cuentaCarrito;
})

btnMenos.addEventListener('click', () => {
    if(cuentaCarrito > 0) {
        cuentaCarrito--;
        cuenta.innerHTML = cuentaCarrito;
    }
})



function cerrarModal(){
  const modal = document.querySelector('.modal')
  const imgCarrusel = document.querySelector('#carruselGrande')
  
  modal?.remove();
  imgCarrusel.style = 'z-index: 0'
}

function carrito() {
  
  agregar.onclick = function() {
    console.log('Clickando el carrito')
  }
}
carrusel()
carrito()
mostrarImagen()