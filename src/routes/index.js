import { Router } from 'express';
import cabins from './cabins.routes';
import customers from './customers.routes';

const router = Router();

router.use('/cabins', cabins);
router.use('/customers', customers);

export default router;