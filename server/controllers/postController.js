import formidable from 'formidable';

import { errors } from '../utils/customErrorMsg.js';

const createPost = (req, res) => {
  const form = formidable({ multiples: true });
  form.parse(req, (error, fields, files) => {
    const { title, body, description, slug, id, name } = fields;
    const data = { title, body, description, slug };
    //res.json(data);
    res.json(errors(data));
    //return res.json({ fields });
  });
};

export { createPost };
