import {Router} from 'express'
import {createCarHand, getCarHand, getCarByIdHand, updateCarHand, delCarHand } from '../Handlers/carHandlers/carHand.js'

const carRouter=Router();

carRouter.get('/car', getCarHand);
carRouter.get('/car/:id', getCarByIdHand) ;
carRouter.post('/car', createCarHand);
carRouter.put('/car/:id', updateCarHand);
carRouter.delete('/car/:id', delCarHand);

export default carRouter;