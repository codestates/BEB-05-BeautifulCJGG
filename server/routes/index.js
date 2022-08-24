import { Router } from 'express';
const router = Router();
import web3Router from './web3.js';

router.use('/web3', web3Router);

export default router;
