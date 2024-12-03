import JuegosService from "../services/juegos.service.js";

class JuegosController{
    constructor(){
        this.service = new JuegosService()
    }

    addNewJuego = async(req,res) =>{
        const newJuego = req.body
        if (JSON.stringify(newJuego) === "{}") {
            res.status(400).send("Debe enviar el juego a agregar al inventario")
        } else {
            const addJuego = await this.service.addNewJuego(newJuego)
            res.status(200).send(addJuego)
        }
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

    getInventario = async(req,res) => {
        const inventario = await this.service.getInventario()
        res.status(200).send(inventario)
    }
    
}

export default JuegosController