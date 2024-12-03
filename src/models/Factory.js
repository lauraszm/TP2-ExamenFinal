import JuegosMemModel from "./DAO/juegos.mem.model.js";
import VentasMemModel from "./DAO/ventas.mem.model.js";

class Factory{
    static get(persistence){
        switch (persistence) {
            case "MEM":
                console.log("Persistiendo en la memoria del servidor")
                return {
                    juegos: new JuegosMemModel(),
                    ventas: new VentasMemModel()
                }
        
            default:
                console.log("Persistiendo en la memoria del servidor - OPCION DEFAULT")
                return {
                    juegos: new JuegosMemModel(),
                    ventas: new VentasMemModel()
                }        
            }
    }
}

export default Factory