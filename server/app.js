import express, { urlencoded, json } from 'express';
import cors from 'cors';
import indexRouter from './routes/index.js';
import postRouter from './routes/posts.js';
const app = express();
const port = 4000;

app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(json());
app.use('/', indexRouter);
app.use('/posts', postRouter);

export default app.listen(port, () => {
  console.log(`      🚀 Server is starting on ${port}`);
});
