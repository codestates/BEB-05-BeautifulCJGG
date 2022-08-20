import { Router } from 'express';
const router = Router();
import { controller } from './../controllers/index.js';

router.get('/', controller.login.get);
router.post('/', controller.login.post);


export default router;
