import { Router } from 'express';
import { getSettings,createSetting,updateSetting,deleteSetting } from '../controllers/settings.controller';

const router = Router();

router.get('/', getSettings);
router.post('/', createSetting)
router.put('/:id', updateSetting)
router.delete('/:id', deleteSetting)

export default router;