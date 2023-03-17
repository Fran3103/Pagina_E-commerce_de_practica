let productoEnCarrito = localStorage.getItem('productos-en-carrito')
productoEnCarrito = JSON.parse(productoEnCarrito)

const carritoVacio = document.querySelector('#carrito-vacio');
const productos = document.querySelector('#productos');
const carritoAcciones = document.querySelector('#carrito_acciones');
const gracias = document.querySelector('#gracias');
let eliminar = document.querySelector('.eliminar');
const vaciarBTN = document.querySelector('.vaciar_carrito');
const total = document.querySelector('.total');
const comprar = document.querySelector('.comprar_ahora');




cargarCarrito();


function cargarCarrito () {
    if (productoEnCarrito && productoEnCarrito.length > 0 ) {

        

        carritoVacio.classList.add('disable');
        productos.classList.remove('disable');
        carritoAcciones.classList.remove('disable');
        gracias.classList.add('disable');
    
        productos.innerHTML="";
    
        productoEnCarrito.forEach(Cards => {
            const div = document.createElement("div");
            div.classList.add("contenedor_carrito");
            div.innerHTML = `
                <div class="autos_en_carrito">
                <img src="${Cards.imagen}" alt="${Cards.titulo}">
                <div class="titulo_carrito">
                    <p>Titulo</p>
                    <h3>${Cards.titulo}</h3>
                </div>
                <div class="cantidad_carrito">
                    <p>Cantidad</p>
                    <h3>${Cards.cantidad}</h3>
                </div>
                <div class="precio_carrito">
                    <p>Precio</p>
                    <h3>$${Cards.precio}</h3>
                </div>
                <div class="total_auto">
                    <p>Total</p>
                    <h3>$${Cards.precio * Cards.cantidad}</h3>
                </div>
                <i class="bi bi-trash3-fill eliminar" id="${Cards.id}"></i>
    
        </div>
            `;

            productos.append(div);
            
    
        })
        
    actualizarBotonesEliminar()
    precioTotal()
    
    }   else{
                carritoVacio.classList.remove('disable');
                productos.classList.add('disable');
                carritoAcciones.classList.add('disable');
                gracias.classList.add('disable');
        }
        
        
        
    }
    
    
    

    vaciarBTN.addEventListener('click',  () =>{
        
        Swal.fire({
            title: 'Se eliminaran todos tus productos',
            icon: 'question',
            html: 'Desea eliminar x productos?',
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText:  'SI',
            cancelButtonText:   'NO'
            
            })
                .then((result) => {
            
                if (result.isConfirmed) {
                    vaciarCarrito ()
            
                    }
            
                }
            )
        }
        )


    comprar.addEventListener('click', () => {

        Toastify({
            text: "Gracias por tu compra",
            duration: 3000,
            destination: "index.html",
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



        vaciarCarrito();
       
        
        gracias.classList.remove('disable');
        carritoVacio.classList.add('disable')
        
        
    })






function actualizarBotonesEliminar(){
    

    botonEliminar = document.querySelectorAll('.eliminar');

    botonEliminar.forEach(boton => {
        boton.addEventListener('click', eliminarDelCarrito);
    })
    
}

function eliminarDelCarrito(e) {
    
    let idBoton = e.currentTarget.id;
    const index = productoEnCarrito.findIndex ( producto =>  producto.id  === idBoton);
    productoEnCarrito.splice(index, 1);
    Toastify({
        text: "Producto eliminado",
        duration: 3000,
        destination: "index.html",
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

    cargarCarrito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productoEnCarrito));
    
}

function vaciarCarrito (){
    
    productoEnCarrito.length = 0 ;
    localStorage.setItem("productos-en-carrito", JSON.stringify(productoEnCarrito));
    
    cargarCarrito();
    
}

function precioTotal(){
    const totalCalculado = productoEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    total.innerText = `: $ ${totalCalculado} `;
}
