import { Router } from 'express';
import cabins from './cabins.routes';

const router = Router();

router.use('/cabins', cabins);

export default router;