import express from 'express';

import { userRegister } from '../controllers/userController.js';

const router = express.Router();

router.get('/register');

export default router;
