import express from "express";
import cors from "cors";
import 'dotenv/config'; // permite procesar variables de entornos
import morgan from "morgan";

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
// falta configurar el index.html

//3 - configurar las rutas