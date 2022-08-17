import { Router } from 'express';
const router = Router();
import loginRouter from './login.js';

router.use('/login', loginRouter);

export default router;
