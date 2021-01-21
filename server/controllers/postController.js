import formidable from 'formidable';

import { customErrors } from '../utils/customErrorMsg.js';

const createPost = (req, res) => {
  const form = formidable({ multiples: true });
  form.parse(req, (error, fields, files) => {
    const { title, body, description, slug, id, name } = fields;
    const data = { title, body, description, slug };
    const errors = customErrors(data);
    errors.length !== 0 && res.status(400).json({ errors });
  });
};

export { createPost };
