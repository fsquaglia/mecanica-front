import {Router}from 'express';
import userRouter from './userRouter.js';
import carRouter from './carRouter.js'
import categoryRouter from "./categoryRouter.js";
import postRouter from "./postRouter.js";
import provinceRouter from "./provinceRouter.js";
import reinitRouter from "./reinitRouter.js";


const mainRouter = Router();

mainRouter.use(userRouter);
mainRouter.use(carRouter)
mainRouter.use(categoryRouter);
mainRouter.use(postRouter);
mainRouter.use(provinceRouter);
mainRouter.use(reinitRouter);


export default mainRouter;
