function errors(data) {
  const errorsArray = [];
  for (const body in data) {
    if (data[body].length === 0) {
      errorsArray.push({ msg: `${body} is required.` });
    }
  }
  return errorsArray;
}

export { errors };
