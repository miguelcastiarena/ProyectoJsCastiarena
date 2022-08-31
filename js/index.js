
//Ingresar nombre de usuario

let nombreUsuario = document.getElementById("nombreIngresado")
const boton = document.getElementById("botonUsuario")
boton.addEventListener("click", saPrompt)


function saPrompt() {
    let nombre = "Ingrese su Usuario"
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
      }).then((usuario) => {
        nombre = usuario.value
        nombreUsuario.innerText = nombre
      });
      
}

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

let agregarACarrito = function (prod) {

    let existe = carrito.some(productoSome =>  productoSome.id == prod.id)
    existe == false ? 
        prod.cantidad=1 && carrito.push(prod) : 
        prod.cantidad < prod.stock ? prod.cantidad++ :
        saAlert()

    localStorage.setItem("carrito", JSON.stringify(carrito))
    actualizarProductos()
}
actualizarProductos()


const btnCarrito = document.querySelector("#btnCarrito")
btnCarrito.addEventListener("click", () => abrirCarrito())

const btnBorrar = document.querySelector("#btnBorrar")
btnBorrar.addEventListener("click", () => borrarCarrito())
function borrarCarrito() {
    localStorage.removeItem("carrito")
    carrito = []
    actualizarProductos()
    abrirCarrito()
}


//Inicio de las funciones
const seleccionador = document.querySelector("#seleccionador")

let botonEscalada = document.getElementById("botonEscalada")
botonEscalada.addEventListener("click", () => crearCards(productosEscalada))

let botonEsqui = document.getElementById("botonEsqui")
botonEsqui.addEventListener("click", () => crearCards(productosEsqui))

let botonSeccionBici = document.getElementById("botonBici")
botonSeccionBici.addEventListener("click", () => crearCards(productosBici))



function actualizarProductos() {
    let productosCarrito = carrito.map((el) => `${el.nombre} (${el.cantidad})`)
    let sumaPrecios = carrito.map((el) => el.precio)

    let listaCarrito = document.getElementById("prodCarrito")
    listaCarrito.innerText = productosCarrito.join(`, `)

    let precioTotal = sumaPrecios.reduce((acumulador, elemento) => acumulador + elemento, 0)

    const listaPrecioCarrito = document.getElementById("precioCarrito")
    listaPrecioCarrito.innerText = precioTotal

}

function crearCards(lista) {
    listaElegida = ""
    lista.forEach((prod) => {
        listaElegida+= 
        `<div class="card" > 
            <h4 class="card-header light">${prod.nombre} </h4>
            <div class="card-body"> 
                <h4 class="card-text">$${prod.precio} </h4>
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
        `<div class="card" > 
            <h4 class="card-header light">${prod.nombre} </h4>
            <div class="card-body"> 
                <h4 class="card-text">$${prod.precio} </h4>
                <h5 class="card-text">Cantidad ${prod.cantidad} </h4>
                <button id="btn-quitar${prod.id}" class="btn btn-info w-50">Quitar del carrito</button>
                <button id="btn-prod${prod.id}" class="btn btn-info w-50">Agregar al carrito</button>
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
