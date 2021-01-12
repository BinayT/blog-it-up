import User from '../models/userModel.js';
import { body, validationResult } from 'express-validator';

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
  } catch (error) {
    return res.status(500).json({ errors: error });
  }
};

export { userRegister, registrationValidations };
