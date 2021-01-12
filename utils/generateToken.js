import jwt from 'jsonwebtoken';

const generateToken = (user) => {
  return jwt.sign({ user }, process.env.SECRET_OR_KEY, {
    expiresIn: '2d',
  });
};

export default generateToken;
