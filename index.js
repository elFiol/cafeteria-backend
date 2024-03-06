import express from "express";
import cors from "cors";
import 'dotenv/config'; // permite procesar variables de entornos
import morgan from "morgan";
import {fileURLToPath} from 'url';
import path from "path";
import Productosrouter from "./src/routes/productos.routes.js";

console.log("hola mundo")
//1 - configurar un puerto

const app = express()
// crear una variable
app.set("port", process.env.PORT || 4000);
app.listen(app.get("port"), ()=>{
    console.log("estoy en el puerto " + app.get("port"))
})

//2 - configurar los middleware del proyecto
app.use(cors()) //permitir conexiones remotas
app.use(morgan('dev')) // nos da info extra en la terminal 
app.use(express.json())// interpretar datos en formato json
app.use(express.urlencoded({extended: true}))// ayuda a interpretar los datos del body del request
// configurar el index.html
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
// console.log(__dirname)
// console.log(path.join(__dirname, 'public'))
app.use(express.static(path.join(__dirname, 'public')))
// 3 - configurar las rutas

app.use("/api", Productosrouter)

// app.get('/', (req, res)=>{
//     console.log("alguien solicito algo")
//     // falta configurar la respuesta 
//     res.send("respuesta desde el backend de cafesito")
// })