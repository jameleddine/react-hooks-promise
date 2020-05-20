
/**
 * converts an array to object with keys(keyField)
 * and value (if provided would be another key of item, if not the whole item)
 *
 * @param {*} array
 * @param {string} [keyField="id"]
 * @param {*} [value=null]
 * @returns {object}
 */
const arrayToObject = (array, keyField = "id", value = null) =>
  array.reduce((obj, item) => ({ ...obj, [item[keyField]]: item[value] || item }), {});

export default arrayToObject;
