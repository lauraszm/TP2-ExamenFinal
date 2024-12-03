# TP2 - API REST

## Instalacion

* [ ] Asegurate de tener la ultima version de [node](https://nodejs.org/en)

* [ ] Instala las dependencias `npm install`

## Correr el proyecto

script `npm start` o `npm run watch`

## Probar

El proyecto corre en el puerto 8080: `http://localhost:8080` o si no esta disponible, en el puerto 8081

### Rutas disponibles

** Juegos **
- Ver el inventario : GET "/juegos/inventario"

- Crear nuevo juego: POST "/juegos/newJuego"
```
  {
	    "nombre": string,
      "categoria": string,
      "precio": numero igual o mayor a 1,
      "stock": numero igual o mayor a 1
  }
```
Respuesta: si el juego ya existe, actualiza el stock del juego existente. De lo contrario devuelve el nuevo juego:
```
{
    "id": 1,
    "nombre": "Juego de la Oca",
    "categoria": "Familiar",
    "precio": 20000,
    "stock": 100
}
```

** Ventas **
- Ver la lista total de ventas: GET "ventas/allVentas"
- Registrar una nueva venta: POST "ventas/newVenta"
```
  {
	    "id": numero igual o mayor a 1,
      "cantidad": numero igual o mayor a 1,
  }
```
Respuesta: la venta registrada y el juego con el stock actualizado:
```
{
    "ventaRegistrada": {
        "id": 1,
        "cantidad": 10
    },
    "juego": {
        "id": 1,
        "nombre": "Juego de la Oca",
        "categoria": "Familiar",
        "precio": 20000,
        "stock": 90
    }
}
```
  
## Autora
** Laura Szmulewicz - Curso YA-21A **