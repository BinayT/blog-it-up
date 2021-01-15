export default function errorMsg(msg) {
  const errorObject = { errors: [{ msg }] };
  return errorObject;
}
