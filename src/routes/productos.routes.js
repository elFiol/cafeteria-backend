import { Router } from "express";
import { listarProductos, crearProductos, obtenerProducto, editarProducto } from "../controller/productos.controller.js";

const Productosrouter = Router();

Productosrouter.route('/productos').get(listarProductos).post(crearProductos);
Productosrouter.route("/producto/:id").get(obtenerProducto).put(editarProducto).delete();

export default Productosrouter