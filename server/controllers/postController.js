
import { data } from '../data/posts.js';
const getPost = (req, res) => {
  const post = data.posts.find(x=>x.postId ===req.params.id)
  res.json(post); 
}
const getPosts = (req, res) => {
  const posts = data.posts;
    res.json(posts);
}
 export { getPost, getPosts};
