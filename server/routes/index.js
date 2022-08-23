import { Router } from 'express';
const router = Router();
import loginRouter from './login.js';
import web3Router from './web3.js';

router.use('/login', loginRouter);
router.use('/web3', web3Router);

export default router;
