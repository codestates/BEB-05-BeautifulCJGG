import { data } from '../data/posts.js';

// firebase 
const getPost = (req, res) => {
  const post = data.posts.find(x=>x.postId ===req.params.id)
  res.json(post); 
}
const getPosts = (req, res) => {
  const posts = data.posts;
    res.json(posts);
}

const createNewPost = (req, res) => {
  const newPost = {
      postId: data.posts?.length ? parseInt(data.posts[data.posts.length - 1].postId) + 1 : 1,
      userId: req.body.userId,
      title: req.body.title,
      category: req.body.category,
      contents: req.body.contents,
      createdAt: req.body.createdAt
  }

  if (!newPost.userId || !newPost.title || !newPost.category || !newPost.contents) {
      return res.status(400).json({ 'message': 'userId and contents are required.'});
  }
  const newData = [...data.posts, newPost];
  res.status(201).json(newData);
}

const updatePost = (req, res) => {
  const post = data.posts.find(post => parseInt(post.postId) === parseInt(req.params.id));
    if (!post) {
        return res.status(400).json({ "message": `post ID ${req.body.id} not found` });
    }
    const filteredPosts = data.posts.filter((post)=> parseInt(post.postId) !== parseInt(req.params.id));
    console.log(filteredPosts);  
    const newPost = {
      postId: req.body.postId,
      userId: req.body.userId,
      title: req.body.title,
      category: req.body.category,
      contents: req.body.contents,
      createdAt: req.body.createdAt
  }
    const newData = [...data.posts, newPost]
    newData.sort((a,b) => (a.postId > b.postId) ? 1 : ((b.postId > a.postId) ? -1 : 0))
    res.json(newData);
}

const setPostDelete = (req, res)=>{
  const deletedPost = data.posts.filter((post)=> parseInt(post.postId) !== parseInt(req.params.id));
  if (!deletedPost) {
    return res.status(400).json({ "message": `Post ID ${req.body.id} not found` });
  }
  res.json(deletedPost);
}

 export { getPost, getPosts, createNewPost, updatePost, setPostDelete};
