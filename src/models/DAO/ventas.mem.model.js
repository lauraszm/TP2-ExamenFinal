import JuegosMemModel from "./juegos.mem.model.js"

class VentasMemModel{
    constructor(){
        this.ventas = []
        //this.juegos = new JuegosMemModel()
    }

    registrarVenta = async(venta) => {
        this.ventas.push(venta)
        return this.ventas
    }

    getAllVentas = async() => {
        return this.ventas
    }
}

export default VentasMemModel