import Producto from "../database/model/producto.js"

export const listarProductos = (req,res) => {
    console.log('desde la lista productos')
    res.send("enviar lista Productos...")

}

export const crearProductos = async(req, res) => {
    try{
        // verificar los datos del body
        console.log(req.body)
        // validar los datos
        // pedir al BDcrear el producto
        const productoNuevo = new Producto(req.body)
        await productoNuevo.save()
        //enviar el 201
        res.status(201).json({
            mensaje: "el producto fue creado correctamente"
        })
    }catch(error){
        console.log(error)
        res.status(400).json({
            mensaje: "No se pudo procesar la solicitud de crear productos"
        })
    }
}