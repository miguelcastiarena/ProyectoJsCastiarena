let escalada
let marca
let bicicletas
let esqui
const IVA = 1.21
const carrito = []
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
const prod13 = new Producto("Casco Bicicleta Shimano", 0015, 13789, 15, true, bicicletas)
const prod14 = new Producto("Casco Bicicleta Vairo", 0016, 16743, 13, true, bicicletas)
const prod15 = new Producto("Bicicleta Zenith", 0017, 127863, 8, true, bicicletas)
const prod16 = new Producto("Bicicleta Vairo", 0020, 143290, 8, true, bicicletas)
const prod17 = new Producto("Inflador Shimano", 0021, 3211, 8, true, bicicletas)
const prod18 = new Producto("Inflador Olmo", 0022, 2167, 8, true, bicicletas)



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


//SECCIONES

//Seccion Escalada


function seccionEscalada () {
    let productoEscalada;
do {
    productoEscalada = prompt(`Seccion ESCALADA Y MONTAÑISMO \nQue producto agregar al carrito? \n1)${prod1.nombre} \n2)${prod2.nombre} \n3)${prod3.nombre} \n4)${prod4.nombre} \n5)${prod5.nombre} \n6)${prod6.nombre}` )
} while ( productoEscalada != 1 && productoEscalada!= 2 && productoEscalada != 3 && productoEscalada != 4 && productoEscalada != 5 && productoEscalada != 6 );

switch (productoEscalada) {
    case "1" : 
        productoAComprar = prod1
        break
    case "2" :
        productoAComprar = prod2
        break
    case "3" :
        productoAComprar = prod3
        break
    case "4" :
        productoAComprar = prod4
        break
    case "5" :
        productoAComprar = prod5
        break
    case "6" :
        productoAComprar = prod6
        break
}
agregarACarrito(productoAComprar)

}

//Seccion Esqui

function seccionEsqui () {
    let productoEsqui;
do {
    productoEsqui = prompt(`Seccion ESQUI Y SNOWBOARD \nQue producto agregar al carrito? \n1)${prod7.nombre} \n2)${prod8.nombre} \n3)${prod9.nombre} \n4)${prod10.nombre} \n5)${prod11.nombre} \n6)${prod12.nombre}` )
} while ( productoEsqui != 1 && productoEsqui != 2 && productoEsqui != 3 && productoEsqui != 4 && productoEsqui != 5 && productoEsqui != 6);

switch (productoEsqui) {
    case "1" : 
        productoAComprar = prod7
        break
    case "2" :
        productoAComprar = prod8
        break
    case "3" :
        productoAComprar = prod9
        break
    case "4" :
        productoAComprar = prod10
        break
    case "5" :
        productoAComprar = prod11
        break
    case "6" :
        productoAComprar = prod12
        break
}
agregarACarrito(productoAComprar)

}

//Seccion Bicicletas

function seccionBicicletas () {
    let productoBicicletas;
do {
    productoBicicletas = prompt(`Seccion BICICLETAS \nQue producto desea agregar al carrito? \n1)${prod13.nombre} \n2)${prod14.nombre} \n3)${prod15.nombre} \n4)${prod16.nombre} \n5)${prod17.nombre} \n6)${prod18.nombre}` )
} while ( productoBicicletas != 1 && productoBicicletas!= 2 && productoBicicletas != 3 && productoBicicletas != 4 && productoBicicletas != 5 && productoBicicletas != 6);

switch (productoBicicletas) {
    case "1" : 
        productoAComprar = prod13
        break
    case "2" :
        productoAComprar = prod14
        break
    case "3" :
        productoAComprar = prod15
        break
    case "4" :
        productoAComprar = prod16
        break
    case "5" :
        productoAComprar = prod17
        break
    case "6" :
        productoAComprar = prod18
        break
        
}
agregarACarrito(productoAComprar)

}



//Inicio de las funciones

let botonSeccionEscalada = document.getElementById("botonEscalada")
botonSeccionEscalada.addEventListener("click", seccionEscalada)

let botonSeccionEsqui = document.getElementById("botonEsqui")
botonSeccionEsqui.addEventListener("click", seccionEsqui)

let botonSeccionBici = document.getElementById("botonBici")
botonSeccionBici.addEventListener("click", seccionBicicletas)


function actualizarProductos() {
    

//Lista de productos en carrito con map()

const productosCarrito = carrito.map((el) => el.nombre)
const sumaPrecios = carrito.map((el) => el.precio)

const listaCarrito = document.getElementById("prodCarrito")
listaCarrito.innerText = productosCarrito.join(", ")


//Precio total por la compra con reduce()

const precioTotal = sumaPrecios.reduce((acumulador, elemento) => acumulador + elemento, 0)

//alert("El precioo total es: $" + precioTotal)

const listaPrecioCarrito = document.getElementById("precioCarrito")
listaPrecioCarrito.innerText = precioTotal
}



