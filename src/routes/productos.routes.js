import { Router } from "express";
import { listarProductos } from "../controller/productos.controller.js";

const Productosrouter = Router();

Productosrouter.route('/productos').get(listarProductos)

export default Productosrouter