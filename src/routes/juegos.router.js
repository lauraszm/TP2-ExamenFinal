import express from 'express'
import JuegosController from '../controllers/juegos.controller.js'

class JuegosRouter{
    constructor(){
        this.router = new express.Router()
        this.controller = new JuegosController()
    }

    start(){
        this.router.post("/newJuego", this.controller.addNewJuego)
        this.router.get("/inventario", this.controller.getInventario)
        return this.router
    }
}

export default JuegosRouter