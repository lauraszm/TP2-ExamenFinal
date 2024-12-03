import Joi from 'joi'

export const validateJuego = (juego) => {
    const juegoSchema = Joi.object({
        nombre: Joi.string().min(1).max(100).required(),
        categoria: Joi.string().min(3).max(100).required(),
        precio: Joi.number().min(0).required(),
        stock: Joi.number().min(1).required()
    })

    const { error } = juegoSchema.validate(juego)
    const result = {
        error: error ? true : false,
        errorMessage: error ? error.details[0].message : null
    }
    return result
}

export const validateVenta = (venta) => {
    const ventaSchema = Joi.object({
        id: Joi.number().min(1).required(),
        cantidad: Joi.number().min(1).required()
    })

    const { error } = ventaSchema.validate(venta)
    const result = {
        error: error ? true : false,
        errorMessage: error ? error.details[0].message : null
    }
    return result
}