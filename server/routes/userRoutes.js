import express from 'express';

import {
  registrationValidations,
  loginValidations,
} from '../utils/userInputValidations.js';
import {
  userRegister,
  getAllUsers,
  loginUser,
} from '../controllers/userController.js';

const router = express.Router();

//@Desc   Create new User
//@route  POST /register
//@access Public
router.post('/register', registrationValidations, userRegister);

//@Desc   Logs in an User
//@route  POST /login
//@access Public
router.post('/login', loginValidations, loginUser);
router.get('/users', getAllUsers);

export default router;
