import { Router } from "express";
import userRouter from "./userRouter.js";
import categoryRouter from "./categoryRouter.js";
import postRouter from "./postRouter.js";
import provinceRouter from "./provinceRouter.js";
import reinitRouter from "./reinitRouter.js";
import providerRoutes from "./providerRoutes.js";

const mainRouter = Router();

mainRouter.use(userRouter);
mainRouter.use(categoryRouter);
mainRouter.use(postRouter);
mainRouter.use(provinceRouter);
mainRouter.use(reinitRouter);
mainRouter.use(providerRoutes);

export default mainRouter;
