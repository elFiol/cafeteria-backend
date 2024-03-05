import express from "express";

console.log("hola mundo")
//1 - configurar un puerto

const app = express()
// crear una variable
app.set("port", 4000);
app.listen(app.get("port"), ()=>{
    console.log("estoy en el puerto " + app.get("port"))
})

//2 - configurar los middleware del proyecto

//3 - configurar las rutas