import express from 'express';
const router = express.Router();

import { createPost } from '../controllers/postController.js';

router.post('/create_post', createPost);

export default router;
