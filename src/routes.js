import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import EstablishmentController from './app/controllers/EstablishmentController';
import VoucherController from './app/controllers/VoucherController';

import TestController from './app/controllers/TestController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.get('/bira', TestController.index);
routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.post('/establishments', EstablishmentController.store);
routes.post('/vouchers', VoucherController.store);

export default routes;
