import express from 'express';

import { userRegister } from '../controllers/userController.js';

const router = express.Router();

router.post('/register');

export default router;
