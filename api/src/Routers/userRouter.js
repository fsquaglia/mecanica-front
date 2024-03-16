import {Router}from 'express';
import {userLogHand, userCreateHand}from '../Handlers/userHandler/userLogHandler.js'
import {getUserHand, getDetailUserHand, updateUserHand, resetUserhand, delUserHand}from '../Handlers/userHandler/userHandlers.js'
import { middleCreate, middleLogin } from '../Utils/validation/index.js';

const userRouter = Router();

userRouter.get('/user', getUserHand)
userRouter.get('/user/:id', getDetailUserHand)
userRouter.post('/user/login', middleLogin, userLogHand)
userRouter.post('/user/create', middleCreate, userCreateHand)
userRouter.put('/user/:id', updateUserHand)
userRouter.patch('/user/:id', resetUserhand)
userRouter.delete('/user/:id', delUserHand)


export default userRouter;