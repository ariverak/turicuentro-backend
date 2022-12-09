import { Router } from 'express';
import { loginUser,registerUser, getUser } from '../controllers/users.controller';
import authMiddleware  from '../middlewares/auth'

const router = Router();

router.post('/auth/login', loginUser);
router.post('/auth/register', registerUser)
router.get("/auth/user",authMiddleware,getUser);


export default router;