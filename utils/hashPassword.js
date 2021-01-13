import bcrypt from 'bcryptjs';

async function hashPassword(password) {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
}

async function unhashPassword(password, hash) {
  const unhashedPassword = await bcrypt.compare(password, hash);
  return unhashedPassword;
}

export { hashPassword, unhashPassword };
