const overlay = document.querySelector('#overlay');
const menu = document.querySelector('#menu');
const cerrar = document.querySelector('#cerrar');
const btnPrevio = document.querySelector('#previo');
const btnSiguiente = document.querySelector('#siguiente');
const btnMenos = document.querySelector('#menos');
const btnMas = document.querySelector('#sumar');
const cuenta = document.querySelector('.cuenta');
const cart = document.querySelector('.carrito');
const cartContent = document.querySelector('.carrito__evo');
const agregar = document.querySelector('#agregar__carrito');
const imagenes = document.querySelectorAll('.carrusel__img__grandes');
const thumbs = document.querySelectorAll('.thumb');
const carruselItems = document.querySelectorAll('.item');
let cuentaCarrito = 0;
let currentIndex = 0;
const tel = window.matchMedia("(min-width: 768px)").matches;

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

document.querySelector('#previo').addEventListener('click', () => {
   navigate(-1);
});

document.querySelector('#siguiente').addEventListener('click', () => {
   navigate(1);
});

function navigate(direccion) {
  const contenedorGaleria = document.querySelector('.imagenes__carrusel');
  const imagenes = document.querySelectorAll('.item').length;
  
  currentIndex = (currentIndex + direccion + imagenes) % imagenes;
  const offset = -currentIndex * 100;
  
  contenedorGaleria.style.transform = `translateX(${offset}%)`;
}

function carrusel() {
  // Aplicar estilo display en función del tamaño de la pantalla
carruselItems.forEach(item => {
  item.style.display = tel ? 'none' : 'block';
});
// Mostrar el primer item por defecto
carruselItems[0].style.display = 'block';

// Agregar evento de clic a cada miniatura
thumbs.forEach((thumb, index) => {
  
thumb.addEventListener('click', () => {
  // Ocultar todos los items del carrusel
  carruselItems.forEach(item => {
    item.style.display = 'none';
  });
  // Mostrar el item correspondiente al índice de la miniatura clicada
  carruselItems[index].style.display = 'block';
});

});
}



function mostrarImagen() {
  imagenes.forEach(imagen => {
    imagen.onclick = function() {
      // Generar modal
      if(tel === true) {
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.onclick = cerrarModal
        // Agregar al body
        const body = document.querySelector('body');
        body.appendChild(modal);

        // Mostrar el section carrusel__grandes
        const imgCarrusel = document.querySelector('#carruselGrande')
        imgCarrusel.style = 'position: absolute; z-index: 999; align-items: center; width: 30%;'
        imgCarrusel.style.display = 'block'
        
      } 
    };
  });
}



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