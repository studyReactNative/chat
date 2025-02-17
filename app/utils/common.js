export const validateEmail = (email) => {
  const regex =
    /^[A-Za-z0-9]+([.-_][A-Za-z0-9]+)*@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  return regex.test(email);
};

export const removeWhitespace = (text) => {
  const regex = /\s/g;
  return text.replace(regex, "");
};
