import express from 'express'
import config from './config.js'
import JuegosRouter from './routes/juegos.router.js'
import VentasRouter from './routes/ventas.router.js'

const app = express()
const PORT = config.PORT

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/juegos", new JuegosRouter().start())
app.use("/ventas", new VentasRouter().start())

app.listen(PORT, () =>
    console.log(`Servidor corriendo en: http://localhost:${PORT}`)
);

app.on("Error", (err) =>
    console.error("Hubo un problema con el servidor", err)
);