import {Router} from 'express'
import sv from '../Handlers/serviceHandlers/serviceHand.js'
const serviceRouter=Router();

serviceRouter.get('/service', sv.getServiceHand);
serviceRouter.get('/service/:id', sv.getServiceIdHand);
serviceRouter.post('/service', sv.createServiceHand);
serviceRouter.put('/service/:id', sv.updateServiceHand);
serviceRouter.delete('/service/:id', sv.delServiceHand);

export default serviceRouter;