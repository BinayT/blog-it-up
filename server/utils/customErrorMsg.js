function customErrors(data) {
  const errorsArray = [];
  for (const body in data) {
    if (data[body].length === 0) {
      const bodyName = body.charAt(0).toUpperCase() + body.slice(1);
      errorsArray.push({ msg: `${bodyName} is required.` });
    }
  }
  return errorsArray;
}

export { customErrors };
