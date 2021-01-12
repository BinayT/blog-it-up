import { body, validationResult } from 'express-validator';

const registrationValidations = [
  body('name').not().isEmpty().withMessage("Name can't be black"),
  body('email').isEmail().trim().withMessage('Valid email address is required'),
  body('password')
    .isLength({ min: 4 })
    .withMessage('Password must be of at least 4 characters'),
];

const loginValidations = [
  body('email').isEmail().trim().withMessage('Valid email address is required'),
  body('password')
    .isLength({ min: 4 })
    .withMessage('Password must be of at least 4 characters'),
];

const errors = (req) => validationResult(req);

export { registrationValidations, loginValidations, errors };
