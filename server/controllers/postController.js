import formidable from 'formidable';
import { v4 as uuidv4 } from 'uuid';

import { customErrors } from '../utils/customErrorMsg.js';

const createPost = (req, res) => {
  const form = formidable({ multiples: true });
  form.parse(req, (error, fields, files) => {
    const { title, body, description, slug, id, name } = fields;
    const data = { title, body, description, slug };
    const errors = customErrors(data);

    if (Object.keys(files).length === 0) {
      errors.push({ msg: 'Image is required' });
    } else {
      const { type } = files.image;
      const splitExtension = type.split('/')[1].toLowerCase();
      console.log(splitExtension);
      if (
        splitExtension !== 'jpeg' &&
        splitExtension !== 'jpg' &&
        splitExtension !== 'png'
      ) {
        errors.push({
          msg: `".${splitExtension}" isn't a valid image extension. Please only use .jpg, .jpeg or .png extensions.`,
        });
      } else {
        files.image.name = `${uuidv4()}.${splitExtension}`;
        console.log(files.image.name);
      }
    }
    errors.length !== 0 && res.status(400).json({ errors, files });
  });
};

export { createPost };
