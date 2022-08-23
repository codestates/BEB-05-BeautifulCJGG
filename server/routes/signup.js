import { Router } from 'express';
const router = Router();
import { controller } from './../controllers/signup.js';

router.post('/', controller.signup.post);

export default router;
