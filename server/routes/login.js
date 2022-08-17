import { Router } from 'express';
const router = Router();
import { controller } from './../controllers/index.js';

router.get('/', controller.metadata.get);
router.post('/', controller.metadata.post);

export default router;
