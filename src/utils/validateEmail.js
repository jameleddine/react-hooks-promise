/**
 *  validates an email and returns a message if not valid
 *
 * @param {string} str
 * @returns {string}
 */
const validateEmail = (str) => {
  const emailRegex = new RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);
  if (!emailRegex.test(str)) return "this e-mail is not valid";
  // add logic here
  return "";
};
export default validateEmail;
