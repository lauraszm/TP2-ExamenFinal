import VentasService from "../services/ventas.service.js";

class VentasController{
    constructor(){
        this.service = new VentasService()
    }

    registrarVenta = async(req,res) => {
        const newVenta = req.body
        if(JSON.stringify(newVenta) === "{}"){
            res.status(400).send("Debe enviar informacion de la venta")
        } else {
            const addVenta = await this.service.registrarVenta(newVenta)
            res.status(200).send(addVenta)
        }
    }

    getAllVentas = async(req,res) => {
        const allVentas = await this.service.getAllVentas()
        res.status(200).send(allVentas)
    }
    
}

export default VentasController