
//DOM y eventos

let nombreUsuario = document.getElementById("nombreIngresado")

const btnCarrito = document.querySelector("#btnCarrito")
btnCarrito.addEventListener("click", () => abrirCarrito())

const btnBorrar = document.querySelector("#btnBorrar")
btnBorrar.addEventListener("click", () => borrarCarrito())

const seleccionador = document.querySelector("#seleccionador")

let botonEscalada = document.getElementById("botonEscalada")
botonEscalada.addEventListener("click", () => crearCards(productosEscalada))

let botonEsqui = document.getElementById("botonEsqui")
botonEsqui.addEventListener("click", () => crearCards(productosEsqui))

let botonSeccionBici = document.getElementById("botonBici")
botonSeccionBici.addEventListener("click", () => crearCards(productosBici))

let listaCarrito = document.getElementById("prodCarrito")

const listaPrecioCarrito = document.getElementById("precioCarrito")

const boton = document.getElementById("botonUsuario")
boton.addEventListener("click", saPrompt)

const btnComprar = document.querySelector("#btnComprar")
btnComprar.addEventListener("click", ()=> finalizarComprar())

const loader = document.querySelector("#preLoader")
const error = document.querySelector("#error")


// Alertas

const saAlert = ()=> {
    Swal.fire({
        position: "top-end",
        toast: "true",
        title: 'Supera el Límite de Stock!',
        icon: 'warning',
        color: "orange",
        confirmButtonText: 'Continuar'
      })
}

const finalizarComprar = ()=> {
    nombre == undefined ? 
    Swal.fire({
        position: "top-end",
        toast: "true",
        title: 'Ingrese su Usuario para realizar la compra',
        icon: 'warning',
        color: "orange",
        confirmButtonText: 'Continuar'
      })
      :
    carrito.length == 0 ?
        Swal.fire({
        position: "top-end",
        toast: "true",
        title: 'No hay productos en el carrito',
        icon: 'warning',
        color: "orange",
        confirmButtonText: 'Continuar'
      })
     : 
        Swal.fire({
        title: 'Desea finalizar la compra?',
        text: `El costo total de la compra es: $${listaPrecioCarrito.innerText}`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, realizar la compra!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Su compra fue exitosa!',
            'Nuestro equipo se encuentra preparando su pedido',
            'success'
          )
          borrarCarrito()
        }
      })
}

function saPrompt() {
    nombre = "Ingrese su Usuario"
    Swal.fire({
        position: "top-start",
        title: 'Bienvenido a la Bolsa del Deporte Online!',
        text: 'Ingrese su Usuario',
        input: "text",
        inputPlaceholder: 'Usuario',
        inputAttributes: {
            maxlength: 10,
            },
        confirmButtonText: 'Ingresar'
      }).then((result) => {
        nombre = result.value
        nombreUsuario.innerText = nombre
      });
      
}


//Pre Loader y Error

const preLoader = () => {
    loader.hidden = false
    setTimeout(() => {
        loader.hidden = true
    }, 500);
    ;
}

const mensajeError = () => {
    error.hidden = false
}


// Funciones para manejo del carrito y las tarjetas

const agregarACarrito = (prod) => {

    let existe = carrito.some(productoSome => productoSome.id == prod.id)
    if  (existe == false) {
        prod.cantidad = 1
        carrito.push(prod) 
    } else if (prod.cantidad < prod.stock) {
        prod.cantidad++}
    else {
        saAlert()
    }            
    localStorage.setItem("carrito", JSON.stringify(carrito))
    actualizarProductos()
}


function borrarCarrito() {
    localStorage.removeItem("carrito")
    carrito = []
    actualizarProductos()
    abrirCarrito()
}

function actualizarProductos() {
    let productosCarrito = carrito.map((el) => `${el.nombre} (${el.cantidad})`)
    let sumaPrecios = carrito.map((el) => el.precio * el.cantidad)
    listaCarrito.innerText = productosCarrito.join(`\n`)
    let precioTotal = sumaPrecios.reduce((prev, curr) => prev + curr, 0)
    const listaPrecioCarrito = document.getElementById("precioCarrito")
    listaPrecioCarrito.innerText = precioTotal
}
actualizarProductos()

function crearCards(lista) {
    listaElegida = ""
    lista.forEach((prod) => {
        listaElegida+= 
        `<div class="card" > 
            <h4 class="card-header light">${prod.nombre} </h4>
            <div class="card-body"> 
                <img src="${prod.imagen}" class="card-img-top" alt="${prod.nombre}" title="${prod.nombre}">
                <h4 class="card-text">$${prod.precio} </h4>
                <p class="card-text">Disponibles: ${prod.stock}</p>
                <p class="card-text">Estado: ${prod.estado}</p>
                <button id="btn-prod${prod.id}" class="btn btn-secondary">Agregar</button>
            </div>
          </div>`
        seleccionador.innerHTML = listaElegida;
    })
    btnAgregar(lista);
}

function btnAgregar (productosAgregados) {
    productosAgregados.forEach((prod) =>{
        document
            .querySelector(`#btn-prod${prod.id}`)
            .addEventListener("click", () => {
                console.log(prod)
                agregarACarrito(prod)
            })
    }
    )
}

function abrirCarrito() {
    seleccionador.innerHTML = ""
    carrito.forEach((prod) => {
        seleccionador.innerHTML +=
        `<div class="card text-center" > 
            <h4 class="card-header light">${prod.nombre} </h4>
            <div class="card-body"> 
                <img src="${prod.imagen}" class="card-img-top" alt="${prod.nombre}" title="${prod.nombre}">
                <h4 class="card-text">$${prod.precio} </h4>
                <h5 class="card-text">Cantidad ${prod.cantidad} </h4>
                <button id="btn-quitar${prod.id}" class="btn btn-outline-primary w-50 m-1 center">Quitar del carrito</button>
                <button id="btn-prod${prod.id}" class="btn btn-outline-primary w-50 m-1 center">Agregar al carrito</button>
            </div>
          </div>`
    }
    )
    quitarProducto()
    sumarProducto()
}

function quitarProducto() {
    carrito.forEach((prod) =>{
        document
            .querySelector(`#btn-quitar${prod.id}`)
            .addEventListener("click", () => { 
                if (prod.cantidad  >1) {
                    prod.cantidad--;
                } else {
                    carrito = carrito.filter((prodFilter) => prodFilter.id !== prod.id);
                }
                localStorage.setItem("carrito", JSON.stringify(carrito))
                abrirCarrito()
                actualizarProductos()
            })
             
    }
    )
} 

function sumarProducto() {
    carrito.forEach((prod) =>
    document.querySelector(`#btn-prod${prod.id}`)
    .addEventListener("click", () => {
        prod.cantidad < prod.stock ? prod.cantidad++ : saAlert()
        localStorage.setItem("carrito", JSON.stringify(carrito))
        abrirCarrito()
        actualizarProductos()
    })
    ) 
    
}