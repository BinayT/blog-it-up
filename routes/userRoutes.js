import express from 'express';

import {
  userRegister,
  registrationValidations,
} from '../controllers/userController.js';

const router = express.Router();

router.post('/register', registrationValidations, userRegister);

export default router;
