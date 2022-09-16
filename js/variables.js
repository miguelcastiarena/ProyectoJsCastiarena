const IVA = 1.21
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let nombre;
let productoAComprar;
let productos = []
let productosEscalada = []
let productosEsqui = []
let productosBici = []


const cargarProductos = async () => {
    await fetch("js/productos.json")
          .then((response) => response.json())
          .then((data) => {
            preLoader();
            productos = data;
            for (const prod of productos) {
                prod.seccion == "escalada" ? productosEscalada.push(prod) :
                prod.seccion == "esqui" ? productosEsqui.push(prod) :
                productosBici.push(prod);
            }
          } 
          )
          .catch((error) => {
            console.error("Algo anduvo mal...");
            mensajeError()
          }
          )
}

cargarProductos()
