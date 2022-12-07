import { Router } from 'express';
import { getCabins } from '../controllers/cabins.controller';

const router = Router();

router.get('/', getCabins);

export default router;