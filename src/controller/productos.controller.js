import Producto from "../database/model/producto.js"

export const listarProductos = async(req,res) => {
    try{
        // pedir a la BD la lista de la coleccion de productos
        const productos = await Producto.find();
        res.status(200).json(productos);
    }catch(error){
        console.log(error)
        res.status(404).json({
            mensaje: "no se pudo encontrar la lista de productos"
        })
    }

}

export const obtenerProducto = async(req,res) => {
    try{
        console.log(req.params.id)
        const producto = await Producto.findById(req.params.id)
        res.status(200).json(producto)
    }catch(error){
        console.log(error)
        res.status(404).json({
            mensaje: "no se pudo encontrar el producto"
        })
    }
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