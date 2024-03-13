import Producto from "../database/model/producto.js"

export const listarProductos = (req,res) => {
    console.log('desde la lista productos')
    res.send("enviar lista Productos...")

}