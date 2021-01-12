import express from 'express';

import {
  userRegister,
  registrationValidations,
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
router.post('/login', loginUser);
router.get('/users', getAllUsers);

export default router;
