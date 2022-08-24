import { Router } from 'express';
const router = Router();
import { controller } from './../controllers/web3.js';

router.post('/createwallet', controller.createWallet.post);

// router.get('/', controller.web3.get);
// router.post('/', controller.web3.post);

export default router;
