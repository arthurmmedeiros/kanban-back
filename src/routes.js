import { Router } from 'express';
import User from './app/models/User';

import UserController from './app/controllers/UserController';
import BoardController from './app/controllers/BoardController';
import LaneController from './app/controllers/LaneController';
import CardController from './app/controllers/CardController';

const routes = new Router();

routes.post('/users', UserController.store);
routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.single);



routes.post('/board', BoardController.store );
routes.get('/boards',BoardController.index);
routes.get('/boards/:id',BoardController.single);


routes.post('/lanes',LaneController.store);

routes.post('/cards', CardController.store);
routes.put('/cards', CardController.update);

export default routes;