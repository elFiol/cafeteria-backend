import mongoose, {Schema} from "mongoose";

const productosSchema = new Schema({
    nombreProducto:{
        type: String,
        required: true,
        unique: true,
        minLength: 2,
        maxLength: 50
    },
    precio: {
        type: Number,
        required: true,
        min: 50,
        max: 10000,
    },
    imagen: {
        type: String,
        required: true,
        // validar URL
    },
    descripcion_breve: {
        required: true,
        type: String,
        minLength: 5,
        maxLength: 50,
    },
    descripcion_breve: {
        required: true,
        type: String,
        minLength: 50,
        maxLength: 300,
    },
    categoria: {
        required: true,
        type: String,
        emun: ["Infusiones","Batidos","Dulce","Salado"]
    }
})

const Productos = mongoose.model("producto", productosSchema);

export default Productos;