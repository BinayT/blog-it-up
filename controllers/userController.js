const userRegister = (req, res) => {
  const { email, password, name } = req.body;
  res.json({ email: email, password: password, name: name });
};

export { userRegister };
