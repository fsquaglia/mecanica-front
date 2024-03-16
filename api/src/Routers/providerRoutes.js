import { Router } from "express";
import getCategoryProvider from "../Handlers/providerHandler/getCategoryProvider.js";
import getCategoryProviderById from "../Handlers/providerHandler/getCategoryProviderById.js";
import postCategoryProvider from "../Handlers/providerHandler/postCategoryProvider.js";
import updateCategoryProvider from "../Handlers/providerHandler/updateCategoryProvider.js";
import deleteCategoryProvider from "../Handlers/providerHandler/deleteCategoryProvider.js";
import getProvider from "../Handlers/providerHandler/getProvider.js";
import getProviderById from "../Handlers/providerHandler/getProviderById.js";
import postProvider from "../Handlers/providerHandler/postProvider.js";
import deleteProvider from "../Handlers/providerHandler/deleteProvider.js";
import updateProvider from "../Handlers/providerHandler/updateProvider.js";

const providerRoutes = Router();

//todas las rutas GET, POST... para Proveedores y sus categorías

//!Rutas para las Categorías de Provider
providerRoutes.post("/postcategoryprovider", postCategoryProvider); //crea una categoría para Proveedores, devuelve todas las categorías ordenadas según query http://localhost:3001/postcategoryprovider?order=DESC
providerRoutes.get("/categoryprovider", getCategoryProvider); //todas las categorías de proveedores, puede recibir query para ordenar por descCategory. http://localhost:3001/categoryprovider?order=DESC
providerRoutes.get("/categoryprovider/:id", getCategoryProviderById); //categoría de proveedores según id
providerRoutes.patch("/updatecategoryprovider/:id", updateCategoryProvider); //actualiza nombre de categoría. Recibe el id por params, order por query (devuelve todas las categorias) y nameCategoryProvider por body. http://localhost:3001/updatecategoryprovider/4?order=DESC
providerRoutes.delete("/deletecategoryprovider/:id", deleteCategoryProvider); //ídem PATCH pero sin body

//!Rutas para los Provider (Proveedores)
providerRoutes.get("/allproviders", getProvider); //pueden usarse queries, ver en el handler
providerRoutes.get("/providerbyid/:id", getProviderById); //proveedor por id  http://localhost:3001/providerbyid/2
providerRoutes.post("/postProvider", postProvider); //crea un proveedor y lo devuelve
providerRoutes.delete("/deleteProvider/:id", deleteProvider); //elimina un proveedor y devuelve todos los restantes
providerRoutes.patch("/updateprovider/:idProvider", updateProvider); //actualiza un proveedor y lo devuelve
export default providerRoutes;
