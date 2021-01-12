import express from 'express';

import {
  userRegister,
  registrationValidations,
} from '../controllers/userController.js';

const router = express.Router();

//@Desc   Create new User
//@route  POST /register
//@access Public
router.post('/register', registrationValidations, userRegister);

export default router;
