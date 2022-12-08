import { Router } from 'express';
import users from './user.routes';
import cabins from './cabins.routes';
import customers from './customers.routes';
import reservations from './reservations.routes';
import prepaids from './prepaids.routes';
import settings from './settings.routes';

const router = Router();

router.use('/', users);
router.use('/cabins', cabins);
router.use('/customers', customers);
router.use('/reservations', reservations);
router.use('/prepaids', prepaids);
router.use('/settings', settings);

export default router;