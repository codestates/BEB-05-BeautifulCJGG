import { Router } from 'express';
const router = Router();
import { getPost, getPosts, createNewPost, updatePost,setPostDelete } from './../controllers/postController.js';

//console.log("posts.js")

router.get('/', getPosts);
router.get('/:id/', getPost);
router.post('/createNewPost/', createNewPost);
router.post('/updatePost/:id', updatePost);
router.post('/setPostDelete/:id', setPostDelete);

export default router;
