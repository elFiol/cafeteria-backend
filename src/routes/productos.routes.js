import { Router } from "express";
import { listarProductos, crearProductos } from "../controller/productos.controller.js";

const Productosrouter = Router();

Productosrouter.route('/productos').get(listarProductos).post(crearProductos)

export default Productosrouter