import express from 'express';
import { getFreedPosts, getUserPosts, likePost } from '../controllers/posts.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.router();

router.get('/', verifyToken, getFreedPosts);
router.get('/:userId/posts', verifyToken, getUserPosts);

router.patch('/:id/like', verifyToken, likePost);

export default router;
