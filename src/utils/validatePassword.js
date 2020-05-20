/**
 * validates a password and returns a message if not valid
 *
 * @param {string} str
 * @returns {string}
 */
const validatePassword = (str) => {
  if (str.length < 6) return "password should be longer than 6 caracters";
  return "";
};
export default validatePassword;
