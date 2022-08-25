let escalada
let marca
let bicicletas
let esqui
const IVA = 1.21
let carrito = []
let productoAComprar;


class Producto {
    constructor(nombre, id, precio, stock, nuevo, seccion) {
        this.nombre = nombre.toUpperCase();
        this.id = id;
        this.precio = precio;
        this.stock = stock;
        this.nuevo = nuevo;
        this.seccion = seccion
    }
    precioConIVA() {
            let precioFinal = this.precio * IVA
            return "$ " + precioFinal
        }
    actulizarStock(unidades){
            this.stock = this.stock - unidades
        }

}


//Productos Escalada
const prod1 = new Producto("Casco Edelrid Zodiac", 0001, 18861, 10, true, "escalada")
const prod2 = new Producto("Casco Petzl Siroco", 0002, 37111, 8, true, "escalada")
const prod3 = new Producto("Zapatillas Miura VS", 0003, 45876, 12, true, "escalada")
const prod4 = new Producto("Zapatillas Cobra", 0004, 31756, 14, true, "escalada")
const prod5 = new Producto("Arnés Petzl Corax", 0005, 34765, 12, true, "escalada")
const prod6 = new Producto("Arnés Edelrid Prisma", 0006, 26842, 16, true, "escalada")

//Productos Esqui
const prod7 = new Producto("Casco Salewa Vert", 0007, 23458, 8, true, "esqui")
const prod8 = new Producto("Casco Anon Greeta", 0010, 27500, 10, true, "esqui")
const prod9 = new Producto("Botas Salomon Quest", 0011, 65873, 4, true, "esqui")
const prod10 = new Producto("Botas Dalbello Lupo", 0012, 89690, 6, true, "esqui")
const prod11 = new Producto("Esquies Rossignol Soul", 0013, 123768, 5, true, "esqui")
const prod12 = new Producto("Esquies Fisher Ranger", 0014, 120543, 3, true, "esqui")

//Productos Bicicletas
const prod13 = new Producto("Casco Bicicleta Shimano", 0015, 13789, 15, true, "bicicletas")
const prod14 = new Producto("Casco Bicicleta Vairo", 0016, 16743, 13, true, "bicicletas")
const prod15 = new Producto("Bicicleta Zenith", 0017, 127863, 8, true, "bicicletas")
const prod16 = new Producto("Bicicleta Vairo", 0020, 143290, 8, true, "bicicletas")
const prod17 = new Producto("Inflador Shimano", 0021, 3211, 8, true, "bicicletas")
const prod18 = new Producto("Inflador Olmo", 0022, 2167, 8, true, "bicicletas")




let productosEscalada = []
productosEscalada.push(prod1,prod2,prod3,prod4,prod5,prod6)

let productosEsqui = []
productosEsqui.push(prod7,prod8,prod9,prod10,prod11,prod12)

let productosBici = []
productosBici.push(prod13,prod14,prod15,prod16,prod17,prod18)

const productos = productosEscalada.concat(productosEsqui, productosBici)

//Ingresar nombre de usuario

let nombreUsuario = document.getElementById("nombreIngresado")
const boton = document.getElementById("botonUsuario")
boton.addEventListener("click", ingresarUsuario)

function ingresarUsuario() {
    alert("Bienvenido a La Bolsa del Deporte Tienda Online");
    let nombre = prompt("Ingrese su nombre:")
    while (nombre === "" || nombre === null) {
        nombre = prompt("Ingrese su nombre:")
    }
    nombreUsuario.innerText = nombre
}



let agregarACarrito = function (prod) {
    alert(`Se agregó ${prod.nombre} al carrito`)
    carrito.push(prod)
    actualizarProductos()
}



//Inicio de las funciones
const seleccionador = document.querySelector("#seleccionador")


const botonEscalada = document.getElementById("botonEscalada")
botonEscalada.addEventListener("click", () => crearCards(productosEscalada))


let botonEsqui = document.getElementById("botonEsqui")
botonEsqui.addEventListener("click", () => crearCards(productosEsqui))

let botonSeccionBici = document.getElementById("botonBici")
botonSeccionBici.addEventListener("click", () => crearCards(productosBici))



//Lista de productos en carrito con map()

function actualizarProductos() {
    const productosCarrito = carrito.map((el) => el.nombre)

    const sumaPrecios = carrito.map((el) => el.precio)

    const listaCarrito = document.getElementById("prodCarrito")
    listaCarrito.innerText = productosCarrito.join(", ")


    //Precio total por la compra con reduce()

    const precioTotal = sumaPrecios.reduce((acumulador, elemento) => acumulador + elemento, 0)

    const listaPrecioCarrito = document.getElementById("precioCarrito")
    listaPrecioCarrito.innerText = precioTotal

}

function crearCards(lista) {
    listaElegida = ""
    lista.forEach((prod) => {
        listaElegida+= `<div class="card"> 
        <h4>${prod.nombre} </h4>
        <h4>$${prod.precio} </h4>
        <button id="btn-prod${prod.id}" class="btn btn-secondary">Agregar</button>
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




// function cargarTablaProdEscalada () {
//     const tablaProd = document.getElementById("tablaProd")
//     productosEscalada.forEach(producto => {
//         tablaProd.innerHTML  += `<tr> 
//                                     <td> ${producto.id}</td>
//                                     <td> ${producto.nombre}</td>
//                                     <td> ${producto.precio}</td>
//                                     <td> ${producto.stock}</td>
//                                 </tr>`
//     }

//     )
// }

// cargarTablaProdEscalada ()

// const selectProd = document.querySelector("#selectProd")


// function cargarSelectEscalada() {
//     let selectEscalada = ""
//     productosEscalada.sort((a,b) => a.nombre.localeCompare(b.nombre))
//     productosEscalada.forEach(prod => {
//         selectEscalada += `<option value="${prod.id}">${prod.nombre}</option>`
//         selectProd.innerHTML = selectEscalada
//     }
    
//     )
// }

// function cargarSelectEsqui() {
//     let selectEsqui = ""
//     productosEsqui.sort((a,b) => a.nombre.localeCompare(b.nombre))
//     productosEsqui.forEach(prod => {
//         selectEsqui += `<option value="${prod.id}">${prod.nombre}</option>`
//     selectProd.innerHTML = selectEsqui
//     }

//     )
// }

// function cargarSelectBici() {
//     let selectBici = ""
//     productosBici.sort((a,b) => a.nombre.localeCompare(b.nombre))
//     productosBici.forEach(prod => {
//         selectBici += `<option value="${prod.id}">${prod.nombre}</option>`
//         selectProd.innerHTML = selectBici
//     }

//     )
// }


