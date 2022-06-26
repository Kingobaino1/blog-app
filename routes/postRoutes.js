import { Router } from 'express';
import * as postsController from '../controller/posts';

const postRouter = Router();

postRouter.post('/:user_id', postsController.createPost);
postRouter.get('/', postsController.getAllPosts);

export default postRouter;
