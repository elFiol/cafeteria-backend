import { Router } from "express";
import { listarProductos, crearProductos, obtenerProducto, editarProducto, borrarProducto } from "../controller/productos.controller.js";

const Productosrouter = Router();

Productosrouter.route('/productos').get(listarProductos).post(crearProductos);
Productosrouter.route("/producto/:id").get(obtenerProducto).put(editarProducto).delete(borrarProducto);

export default Productosrouter