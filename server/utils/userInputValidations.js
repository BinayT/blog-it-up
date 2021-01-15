import { body, validationResult } from 'express-validator';

const registrationValidations = [
  body('name').not().isEmpty().withMessage("Name can't be blank"),
  body('name')
    .isLength({ min: 3 })
    .withMessage('Name must be of at least of 3 characters'),
  body('email').isEmail().trim().withMessage('Valid email address is required'),
  body('password')
    .isLength({ min: 4 })
    .withMessage('Password must be of at least 4 characters'),
];

const loginValidations = [
  body('email').not().isEmpty().trim().withMessage('Email is required'),
  body('password').not().isEmpty().withMessage('Password is required'),
];

const errors = (req) => validationResult(req);

export { registrationValidations, loginValidations, errors };
