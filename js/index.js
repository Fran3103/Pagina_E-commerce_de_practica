const contenedorModelos = document.querySelector('#contenedor_modelos');
const botonesMenu = document.querySelectorAll('.menu_btn');
const titulo  = document.querySelector('#titulo_principal');


const Cards = [

    //chevrolet
    {
        id : "chevrolet-cobalt",
        titulo: "Chevrolet Cobalt",
        imagen: "img/chevrolet-cobalt.png",
        categoria:{
            nombre: "Chevrolet",
            id: "chevrolet"

        },
        precio: 1200000

    },
    {
        id : "chevrolet-onix",
        titulo: "Chevrolet Onix",
        imagen: "img/chevrolet-onix.png",
        categoria:{
            nombre: "Chevrolet",
            id: "chevrolet"

        },
        precio: 1300000

    },
    {
        id : "chevrolet-spin",
        titulo: "Chevrolet Spin",
        imagen: "img/chevrolet-spin.png",
        categoria:{
            nombre: "Chevrolet",
            id: "chevrolet"

        },
        precio: 1000000

    },

    // FIAT
    {
        id : "fiat-argo",
        titulo: "Fiat Argo",
        imagen: "img/fiat-argo.png",
        categoria:{
            nombre: "Fiat",
            id: "fiat"

        },
        precio: 1450000

    },
    {
        id : "fiat-cronos",
        titulo: "Fiat Cronos",
        imagen: "img/fiat-cronos.png",
        categoria:{
            nombre: "Fiat",
            id: "fiat"

        },
        precio: 1000000

    },
    {
        id : "fiat-strada",
        titulo: "Fiat Strada",
        imagen: "img/fiat-strada.png",
        categoria:{
            nombre: "Fiat",
            id: "fiat"

        },
        precio: 1600000

    },
    {
        id : "fiat-toro",
        titulo: "Fiat Toro",
        imagen: "img/fiat-toro.png",
        categoria:{
            nombre: "Fiat",
            id: "fiat"

        },
        precio: 1900000

    },
    {
        id : "fiat-uno",
        titulo: "Fiat Uno",
        imagen: "img/fiat-uno.png",
        categoria:{
            nombre: "Fiat",
            id: "fiat"

        },
        precio: 1890000

    },

    //FORD
    {
        id : "fort-eco",
        titulo: "Fort Ecosport",
        imagen: "img/ford-ecosport.png",
        categoria:{
            nombre: "ford",
            id: "Ford"

        },
        precio: 3000000

    },
    {
        id : "ford-fiesta",
        titulo: "Ford Fiesta",
        imagen: "img/ford-fiesta.png",
        categoria:{
            nombre: "Ford",
            id: "ford"

        },
        precio: 3400000

    },
    {
        id : "ford-focus",
        titulo: "Ford Focus",
        imagen: "img/ford-focus.png",
        categoria:{
            nombre: "Ford",
            id: "ford"

        },
        precio: 2400000

    },
    {
        id : "ford ka",
        titulo: "Ford Ka",
        imagen: "img/ford-ka.png",
        categoria:{
            nombre: "Ford",
            id: "ford"

        },
        precio: 230000

    },
    {
        id : "ford-ranger",
        titulo: "Ford Ranger",
        imagen: "img/ford-ranger.png",
        categoria:{
            nombre: "Ford",
            id: "ford"

        },
        precio: 4000000

    },

    //PEUGEOT
    {
        id : "peugeot-208",
        titulo: "Peugeot 208",
        imagen: "img/peugeot-208.png",
        categoria:{
            nombre: "Peugeot",
            id: "peugeot"

        },
        precio: 3400000

    },
    {
        id : "peugeot-308",
        titulo: "Peugeot 308",
        imagen: "img/peugeot-308.png",
        categoria:{
            nombre: "Peugeot",
            id: "peugeot"

        },
        precio: 3500000

    },
    {
        id : "peugeot-408",
        titulo: "Peugeot 408",
        imagen: "img/peugeot-408.png",
        categoria:{
            nombre: "Peugeot",
            id: "peugeot"

        },
        precio: 3800000

    },
    {
        id : "peugeot-2008",
        titulo: "Peugeot 2008",
        imagen: "img/peugeot-2008.png",
        categoria:{
            nombre: "Peugeot",
            id: "peugeot"

        },
        precio: 4200000

    },

    //RENAULT
    {
        id : "renault-sandero",
        titulo: "Renault Sandero",
        imagen: "img/renault-sandero.png",
        categoria:{
            nombre: "Renault",
            id: "renault"

        },
        precio: 2400000

    },
    {
        id : "renault-sandero2",
        titulo: "Renault Sandero 2",
        imagen: "img/renault-sandero2.png",
        categoria:{
            nombre: "Renault",
            id: "renault"

        },
        precio: 2600000

    },
    {
        id : "renault-kwid",
        titulo: "Renault Kwid",
        imagen: "img/renault-kwid.png",
        categoria:{
            nombre: "Renault",
            id: "renault"

        },
        precio: 2200000

    },

    //VOLKSWAGEN
    {
        id : "volkswagen-fox",
        titulo: "Volkswagen Fox",
        imagen: "img/volkswagen-fox.png",
        categoria:{
            nombre: "Volkswagen",
            id: "volkswagen"

        },
        precio: 3000000

    },
    {
        id : "volkswagen-gol",
        titulo: "Volkswagen Gol",
        imagen: "img/volkswagen-gol.png",
        categoria:{
            nombre: "Volkswagen",
            id: "volkswagen"

        },
        precio: 4000000

    },
    {
        id : "volkswagen-up",
        titulo: "Volkswagen Up",
        imagen: "img/volkswagen-up.png",
        categoria:{
            nombre: "Volkswagen",
            id: "volkswagen"

        },
        precio: 3800000

    },
    {
        id : "volkswagen-polo",
        titulo: "Volkswagen Polo",
        imagen: "img/volkswagen-polo.png",
        categoria:{
            nombre: "Volkswagen",
            id: "volkswagen"

        },
        precio: 4500000

    },
    {
        id : "volkswagen-voyage",
        titulo: "Volkswagen Voyage",
        imagen: "img/volkswagen-voyage.png",
        categoria:{
            nombre: "Volkswagen",
            id: "volkswagen"

        },
        precio: 5000000

    },
]


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
}

cargarAutos(Cards);

botonesMenu.forEach(boton => {
    boton.addEventListener('click', (e)=>{

        if(e.currentTarget.id != "todos"){
        
        const tituloCategoria = Cards.find(card => card.categoria.id === e.currentTarget.id);
        titulo.innerText = tituloCategoria.categoria.nombre; 

        const categorias= Cards.filter(card => card.categoria.id === e.currentTarget.id);
        cargarAutos(categorias);
        
        }
        else{
            titulo.innerText = ('Todos los Modelos')
            cargarAutos(Cards)
        }

    })
})

