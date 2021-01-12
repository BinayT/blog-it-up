import express from 'express';

import {
  userRegister,
  registrationValidations,
  getAllUsers,
} from '../controllers/userController.js';

const router = express.Router();

//@Desc   Create new User
//@route  POST /register
//@access Public
router.post('/register', registrationValidations, userRegister);
router.get('/users', getAllUsers);

export default router;
