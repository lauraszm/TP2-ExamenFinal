import Factory from '../models/Factory.js'
import config from '../config.js'
import { validateJuego } from '../validate/schema.js'

class JuegosService{
    constructor(){
        this.model = Factory.get(config.PERSISTENCE).juegos
    }

    addNewJuego = async(juego) =>{
        const validate = validateJuego(juego)
        const newJuego = validate.error ? validate.errorMessage : await this.model.addNewJuego(juego)
        return newJuego
    }


    getInventario = async() => {
        return await this.model.getInventario()
    }
    
}   


export default JuegosService