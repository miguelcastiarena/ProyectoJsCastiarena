let escalada
let marca
let bicicletas
let esqui
const IVA = 1.21
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
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

const productos = [...productosEscalada, ...productosEsqui, ...productosBici]


