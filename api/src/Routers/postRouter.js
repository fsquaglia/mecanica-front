import { Router } from "express";
import getCategoryPost from "../Handlers/postHandler/getCategoryPost.js";
import postCategoryPost from "../Handlers/postHandler/postCategoryPost.js";
import deleteCategoryPost from "../Handlers/postHandler/deleteCategoryPost.js";
import updateCategoryPost from "../Handlers/postHandler/updateCategoryPost.js";
const postRouter = Router();

//todas las rutas GET, POST... para el post o tips
postRouter.get("/categorypost", getCategoryPost); //todas las categorías de Tips/post ordenadas alfabéticamente

postRouter.post("/createcategorypost", postCategoryPost); //crea una nueva categoría, la recibe por body como {nameCategoryPost:"name"}

postRouter.delete("/deletecategorypost/:idCategoryPost", deleteCategoryPost); //elimina una categoría que no esté asociada a un Post, la recibe como idCategoryPost por params

postRouter.patch("/updatecategorypost/:idCategoryPost", updateCategoryPost); //actualiza una categoría de post, recibe idCategoryPost por params y el nuevo nombre por body como {nameCategoryPost}
export default postRouter;
