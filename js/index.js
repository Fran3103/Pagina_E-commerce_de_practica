const contenedorModelos = document.querySelector('#contenedor_modelos');
const botonesMenu = document.querySelectorAll('.menu_btn');
const titulo  = document.querySelector('#titulo_principal');
let botonAgregar = document.querySelectorAll('.comprar_btn');
let numerito = document.querySelector('.numero');

let Cards = [];

fetch("./js/datos.json")

.then(Response => Response.json())
.then(data => (
    Cards = data,
    cargarAutos(Cards)
))


function cargarAutos(categorias){
    contenedorModelos.innerHTML = "";
    categorias.forEach(card => {
        const div = document.createElement("div");
        div.classList.add("modelo");
        div.innerHTML=
        `
            <img class="imagen" src="${card.imagen}" alt="${card.titulo}">
                <div class="detalles_modelo">
                    <h3 class="titulo_modelo">${card.titulo}</h3>
                    <p class="precio">$ ${card.precio}</p>
                    <button id="${card.id}" class="comprar_btn">comprar</button>
                </div>
        `;

        contenedorModelos.append(div);
    })
    actualizarBotones()

    

}



botonesMenu.forEach(boton => {
    boton.addEventListener('click', (e)=>{

        botonesMenu.forEach(boton=> boton.classList.remove('activo'))
        e.currentTarget.classList.add('activo');
        if(e.currentTarget.id != "todos"){
        
        const tituloCategoria = Cards.find(card => card.categoria.id === e.currentTarget.id);
        titulo.innerText = tituloCategoria.categoria.nombre;
        
        botonesMenu.forEach(boton=> boton.classList.remove('activo'))
        e.currentTarget.classList.add('activo');


        const categorias= Cards.filter(card => card.categoria.id === e.currentTarget.id);
        cargarAutos(categorias);

        
        }
        else{
            titulo.innerText = ('Todos los Modelos')
            cargarAutos(Cards)
            
        }
        
    })
})



function actualizarBotones(){
    botonAgregar = document.querySelectorAll('.comprar_btn');

    botonAgregar.forEach(boton => {
        boton.addEventListener('click', agregarAlcarrito);
    })
    
}
let productoEnCarrito;

let productoEnCarritoLS = localStorage.getItem('productos-en-carrito');

if (productoEnCarritoLS){
    productoEnCarrito = JSON.parse(productoEnCarritoLS);
    actualizarNumero ()
}else{
    productoEnCarrito = [];
}

function agregarAlcarrito (e) {

    Toastify({
        text: "Agregado al carrito",
        duration: 3000,
        destination: "carrito.html",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right,hsl(168, 45%, 49%), hsl(168, 55%, 65%))",
            borderRadius: "10px",
        },
        onClick: function(){} // Callback after click
    }).showToast();

    const idBoton = e.currentTarget.id ;
    const productoAgregado = Cards.find(card => card.id === idBoton);

    if ( productoEnCarrito.some (card => card.id === idBoton) ){

        const index = productoEnCarrito.findIndex(card => card.id === idBoton)
        productoEnCarrito[index].cantidad++;
    } else {

        productoAgregado.cantidad = 1;
        productoEnCarrito.push(productoAgregado);
    
    }
    
    actualizarNumero ();
    
    localStorage.setItem('productos-en-carrito', JSON.stringify(productoEnCarrito));
}


function actualizarNumero (){
    let nuevoNumero = productoEnCarrito.reduce((acc, card) => acc + card.cantidad, 0)
    numerito.innerText = (nuevoNumero);
}