import User from '../models/userModel.js';
import { body, validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';

import hashPassword from '../utils/hashPassword.js';

const registrationValidations = [
  body('email').isEmail().trim().withMessage('Valid email address is required'),
  body('password')
    .isLength({ min: 4 })
    .withMessage('Password must be of at least 4 characters'),
];

//@Desc   Create new User
//@route  POST /register
//@access Public
const userRegister = async (req, res) => {
  const { email, password, name } = req.body;

  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const checkUser = await User.findOne({ email });
    checkUser &&
      res.status(400).json({ errors: [{ msg: 'Email already in use.' }] });

    const hashedPassword = await hashPassword(password);
    try {
      const user = await User.create({
        name,
        email,
        password: hashedPassword,
      });

      const token = jwt.sign({ user }, process.env.SECRET_OR_KEY, {
        expiresIn: '1d',
      });

      return res.status(200).json({
        msg: `Your account of email: ${email} has been created.`,
        token,
      });
    } catch (error) {
      return res.status(500).json({ errors: error });
    }
  } catch (error) {
    return res.status(500).json({ errors: error });
  }
};

export { userRegister, registrationValidations };
