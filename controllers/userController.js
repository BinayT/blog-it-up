import { body, validationResult } from 'express-validator';

const registrationValidations = [
  body('email').isEmail().withMessage('Valid email address is required'),
  body('password')
    .isLength({ min: 4 })
    .withMessage('Password must be of at least 4 characters'),
];

const userRegister = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const { email, password, name } = req.body;
  res.json({ email, password, name });
};

export { userRegister, registrationValidations };
