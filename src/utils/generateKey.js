import { v4 as uuidv4 } from 'uuid';

/**
 * generates a random key based on cryptographically-strong random values
 * @returns {string}
 */
const generateKey = () => uuidv4();

export default generateKey;
