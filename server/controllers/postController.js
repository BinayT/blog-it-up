import formidable from 'formidable';

const createPost = (req, res) => {
  const form = formidable({ multiples: true });
  form.parse(req, (error, fields, files) => {
    return res.json({ fields });
  });
};

export { createPost };
