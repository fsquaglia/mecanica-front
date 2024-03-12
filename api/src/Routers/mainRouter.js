import {Router}from 'express';
import userRouter from './userRouter.js';
import carRouter from './carRouter.js'

const mainRouter = Router();

mainRouter.use(userRouter);
mainRouter.use(carRouter)


export default mainRouter;