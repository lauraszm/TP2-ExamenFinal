import Factory from '../models/Factory.js'
import config from '../config.js'
import { validateVenta } from '../validate/schema.js'

class VentasService{
    constructor(){
        this.model = Factory.get(config.PERSISTENCE).ventas
        this.juegosModel = Factory.get(config.PERSISTENCE).juegos
    }

    registrarVenta = async(venta) => {
        const validate = validateVenta(venta)
        if(validate.error){
            return validate.errorMessage
        } else {
            const newVenta = await this.hayStockJuego(venta)
            return newVenta
        }
    }

    getAllVentas = async() => {
        return await this.model.getAllVentas()
    }

    hayStockJuego = async(venta) => {
        return await this.juegosModel.registrarVenta(venta)
    }
}   

export default VentasService