import { Router } from 'express';

import OngController from './app/controllers/OngController';
import IncidentController from './app/controllers/IncidentController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.post('/session', SessionController.store);

routes.get('/ongs', OngController.index);
routes.post('/ong/create', OngController.store);

routes.get('/incidents', IncidentController.index);
routes.get('/ong/incidents', IncidentController.show);
routes.post('/incident/create', IncidentController.store);
routes.delete('/incident/:id/delete', IncidentController.delete);

export default routes;
