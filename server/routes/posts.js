import { Router } from 'express';
const router = Router();
import { getPost, getPosts } from './../controllers/postController.js';

//console.log("posts.js")

router.get('/', getPosts);
router.get('/:id/', getPost);

export default router;
