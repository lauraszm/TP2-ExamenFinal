class JuegosMemModel{
    constructor(){
        this.juegos = [
            {
                id: 1,
                nombre: "Juego de la Oca",
                categoria: "Familiar",
                precio: 20000,
                stock: 100
            },
            {
                id: 2,
                nombre: "TEG",
                categoria: "estrategia",
                precio: 30000,
                stock: 100
            },
            {
                id: 3,
                nombre: "Pathfinder",
                categoria: "Rol",
                precio: 10000,
                stock: 100
            }
        ]
    }

    addNewJuego = async(juego) =>{
        const allJuegos = await this.getInventario()
        const idJuego = allJuegos.findIndex(j => j.nombre === juego.nombre)
        if(idJuego == -1){
            const nuevaId = allJuegos[allJuegos.length - 1].id + 1
            juego.id = nuevaId
            this.juegos.push(juego)
            return juego
        } else {
            allJuegos[idJuego].stock += juego.stock
            return allJuegos[idJuego]
        }
    }

    getInventario = async() => {
        return this.juegos
    }

    registrarVenta = async(venta) => {
        const allJuegos = await this.getInventario()
        const idJuego = allJuegos.findIndex(j => j.id === venta.id)
        if(idJuego > -1){
            if(allJuegos[idJuego].stock >= venta.cantidad){
                allJuegos[idJuego].stock -= venta.cantidad
                return {
                    ventaRegistrada: venta,
                    juego: allJuegos[idJuego]
                }
            } else {
                return `No hay suficiente stock del juego ${allJuegos[idJuego].nombre}`
            }
        } else {
            return `No existe juego con la id ${venta.id}`
        }
    }    
}

export default JuegosMemModel