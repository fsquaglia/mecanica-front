import {Router} from 'express'
import {createCarHand, getCarHand, getCarByIdHand, updateCarHand, delCarHand } from '../Handlers/carHandlers/carHand.js'
import { verifyToken, checkRole } from '../Utils/validation/index.js'
const carRouter=Router();

carRouter.get('/car', verifyToken, checkRole([0,2]), getCarHand);
carRouter.get('/car/:id', getCarByIdHand) ;
carRouter.post('/car', createCarHand);
carRouter.put('/car/:id', updateCarHand);
carRouter.delete('/car/:id', delCarHand);

export default carRouter;