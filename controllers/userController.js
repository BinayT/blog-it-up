import User from '../models/userModel.js';

import hashPassword from '../utils/hashPassword.js';
import generateToken from '../utils/generateToken.js';
import { errors } from '../utils/userInputValidations.js';

//@Desc   Create new User
//@route  POST /register
//@access Public
const userRegister = async (req, res) => {
  const { email, password, name } = req.body;

  const errorsArray = errors(req);
  !errorsArray.isEmpty() &&
    res.status(400).json({ errors: errorsArray.array() });

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

      const token = generateToken(user);

      res.status(200).json({
        msg: `Your account of email: ${email} has been created.`,
        token,
      });
    } catch (error) {
      res.status(500).json({ errors: error });
    }
  } catch (error) {
    res.status(500).json({ errors: error });
  }
};

//@Desc   Logs in an User
//@route  POST /login
//@access Public
const loginUser = (req, res) => {
  const { email, password } = req.body;
};

//@Desc   Get all Users
//@route  GET /users
//@access Public
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    res.json(error);
  }
};

export { userRegister, getAllUsers, loginUser };
