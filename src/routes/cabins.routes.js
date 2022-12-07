import { Router } from 'express';
import { getCabins,createCabin,updateCabin,deleteCabin } from '../controllers/cabins.controller';

const router = Router();

router.get('/', getCabins);
router.post('/', createCabin)
router.put('/:id', updateCabin)
router.delete('/:id', deleteCabin)

export default router;