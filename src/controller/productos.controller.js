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

export const editarProducto = async(req, res) => {
    try{
        // extraemos el id y buscamos producto
        const buscarProducto = await Producto.findById(req.params.id)
        // si no encuentroel id responder con un mensaje de error
        if(!buscarProducto){
            return res.status(404).json({mensaje: "no se pudo editar el el producto, el id es incorrecto"})
        }
        // pedir a la BD modificar el producto que tiene tal id, con los datos
        await Producto.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({mensage: "el producto fue modificado exitosamente"})
    }catch(error){
        console.log(error)
        res.status(500).json({
            mensaje: "ocurrio un error al querer intentar editar el producto"
        })
    }
}

// export const editarProducto = async(req, res) => {
//     try{
//         // extraemos el id y buscamos producto
//         const buscarProducto = await Producto.findById(req.params.id)
//         // si no encuentroel id responder con un mensaje de error
//         if(!buscarProducto){
//             return res.status(404).json({mensaje: "no se pudo editar el el producto, el id es incorrecto"})
//         }
//         // pedir a la BD modificar el producto que tiene tal id, con los datos
//         await Producto.findByIdAndUpdate(req.params.id, req.body)
//         res.status(200).json({mensage: "el producto fue modificado exitosamente"})
//     }catch(error){
//         console.log(error)
//         res.status(500).json({
//             mensaje: "ocurrio un error al querer intentar editar el producto"
//         })
//     }
// }

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