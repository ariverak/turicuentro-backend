import { Router } from 'express';
import { getPrepaids, createPrepaid, updatePrepaid, deletePrepaid } from '../controllers/prepaids.controller';

const router = Router();

router.get('/', getPrepaids);
router.post('/', createPrepaid)
router.put('/:id', updatePrepaid)
router.delete('/:id', deletePrepaid)

export default router;