import express from 'express'
import VentasController from '../controllers/ventas.controller.js'

class VentasRouter{
    constructor(){
        this.router = new express.Router()
        this.controller = new VentasController()
    }

    start(){
        this.router.post("/newVenta", this.controller.registrarVenta)
        this.router.get("/allVentas", this.controller.getAllVentas)
        return this.router
    }
}

export default VentasRouter