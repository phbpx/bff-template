/**
 * Merges two objects. Created to act as a reduce function callback
 * @param {object} final First object to merge
 * @param {object} current Second object to merge
 */
const objectsToObject = (final, current) => ({
  ...final,
  ...current,
});

/**
 * Creates a new object with the given attribute whenever it exists or not
 * @param {object} data The object with given attribute
 * @param {string} key The attribute's name
 */
const buildObjectFromPropertiesOf = (data, key = 'no-name') => ({
  ...(data && { [key]: data }),
});

/**
 * Calls the proper function to retrieve non-null fields of an attribute
 * with the given key, related to the given object
 * @param {string} key Key that this function will use to retrieve the
 * desired attribute to be checked
 * @param {object || array} object - Object that contains the given desired
 * attribute to be checked
 */
const clearObjectDeeply = (key, object) => {
  if (Array.isArray(object[key])) {
    return { [key]: getNonNullFieldsFromArray(object[key]) };
  }
  if (typeof object[key] === 'object') {
    return { [key]: getNonNullFields(object[key]) };
  }

  return { [key]: object[key] };
};

/**
 * If the attribute of the given object, that's related to the given key,
 * is undefined then this function returns an empty object, that can be
 * easily merged in another object later
 * @param {string} key Key that this function will use to check its value
 * @param {object || array} object Object that contains the given key
 */
const clearObject = (key, object) => {
  if (!object[key]) {
    return {};
  }

  return clearObjectDeeply(key, object);
};

/**
 * Returns an object with the same attributes of the given object,
 * except the attributes with value null or undefined
 * @param {object} object Given object
 */
const getNonNullFieldsFromObject = (object) => {
  const clearedAttributes = Object.keys(object).map((key) =>
    clearObject(key, object)
  );

  if (Array.isArray(clearedAttributes) && clearedAttributes.length) {
    return clearedAttributes.reduce(objectsToObject);
  }

  return {};
};

/**
 * Returns an array whose its objects are returned with
 * the same attributes except null or undefined
 * @param {array} array Given array
 */
const getNonNullFieldsFromArray = (array) =>
  array.map((element) => getNonNullFields(element));

/**
 * Calls the proper function to retrieve non-null fields from
 * a given object or from objects of a given array
 * @param {object || array} data Given data
 */
const getNonNullFields = (data = {}) => {
  if (Array.isArray(data)) {
    return getNonNullFieldsFromArray(data);
  }
  if (typeof data === 'object') {
    return getNonNullFieldsFromObject(data);
  }

  return data;
};

/**
 * Returns an object with its given key without the pattern passed
 * @param {string} key key to be cleared
 * @param {object} object object that contains the key
 * @param {string} pattern pattern to remove from key
 */
const clearKeysDeeply = (key = '', object = {}, pattern = '') => {
  const newKey = key.replace(pattern, '');

  if (Array.isArray(object[key])) {
    return { [newKey]: clearKeysFromArray(object[key], pattern) };
  }

  if (typeof object[key] === 'object') {
    return { [newKey]: clearKeysFromObject(object[key], pattern) };
  }

  return { [newKey]: object[key] };
};

/**
 * If the attribute of the given object, that's related to the given key,
 * is undefined then this function returns an empty object, that can be
 * easily merged in another object later
 * @param {string} key Key that this function will use to check its value
 * @param {object || array} object Object that contains the given key
 * @param {string} pattern Pattern that will be removed from the key
 */
const clearKeys = (key = '', object = {}, pattern = '') => {
  if (!object[key]) {
    return {};
  }

  return clearKeysDeeply(key, object, pattern);
};

/**
 * Returns an object with the same attributes of the given object,
 * but with its keys without the given pattern
 * @param {object} object Given object
 * @param {string} pattern Pattern that will be removed from the keys
 */
const clearKeysFromObject = (object = {}, pattern = '') => {
  const clearedAttributes = Object.keys(object).map((key) =>
    clearKeys(key, object, pattern)
  );

  if (Array.isArray(clearedAttributes) && clearedAttributes.length) {
    return clearedAttributes.reduce(objectsToObject);
  }

  return {};
};

/**
 * Returns an array whose its objects are returned
 * with its keys without the given pattern
 * @param {array} array Given array
 */
const clearKeysFromArray = (array = {}, pattern = '') =>
  array.map((element) => clearKeysFromObject(element, pattern));

/**
 * Calls the proper function to remove pattern from
 * the keys of an object or from objects of a given array
 * @param {object || array} data Given data
 */
const removePatternFromKeys = (data = {}, pattern = '') => {
  if (Array.isArray(data)) {
    return clearKeysFromArray(data, pattern);
  }

  if (typeof data === 'object') {
    return clearKeysFromObject(data, pattern);
  }

  return data;
};

module.exports = {
  getNonNullFields,
  buildObjectFromPropertiesOf,
  removePatternFromKeys,
};
