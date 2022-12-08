import { Router } from 'express';
import { loginUser,registerUser, getUser } from '../controllers/users.controller';
import authMiddleware  from '../middlewares/auth'

const router = Router();

router.post('/login', loginUser);
router.post('/register', registerUser)
router.get("/user",authMiddleware,getUser);


export default router;