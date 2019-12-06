const JSONAPISerializer = require('json-api-serializer');

const Serializer = new JSONAPISerializer();
const {
  buildObjectFromPropertiesOf,
  getNonNullFields,
  removePatternFromKeys,
} = require('../helpers/object');

/**
 * Removes a given pattern from all the keys of the given object,
 * or from all the objects of a given array
 * @param {object || array} data Param to remove pattern from its keys
 */
const removeRelKeywords = (data) => removePatternFromKeys(data, 'rel_');

/**
 * Returns an object that can be spreaded on the options
 * of the Serializer. This object sets the account relationship
 * @param {object || array} data Object or array with the attributes of
 * the data attribute on JSON:API response
 */
const applyAccountRelationship = (data) => {
  if (Object.entries(data).length === 0 && data.constructor === Object)
    return {};

  return (
    (data.rel_account || data[0].rel_account) && {
      relationships: { rel_account: { type: 'accounts' } },
    }
  );
};

/**
 * Sets the self link on each element of data, using its "id" to compose this link.
 * If self is a object, then it uses an attribute called finalURL to define the link
 * @param {object} data Object with the attributes of
 * the data attribute on JSON:API response
 * @param {object} externalData Object with the attributes required
 * by the json-api-serializer to be used as externalData variable
 * on the Serializer
 */
const mountSelfLink = (data, externalData) => {
  if (
    typeof externalData.links.self === 'object' &&
    externalData.links.self.finalURL
  ) {
    return externalData.links.self.finalURL;
  }

  if (typeof externalData.links.self === 'string') {
    return externalData.links.self + data.id;
  }

  return '';
};

/**
 * Sets links that are on the same level of data
 * @param {object} externalData Object with the attributes required
 * by the json-api-serializer to be used as externalData variable
 * on the Serializer
 */
const applyInternalLinks = (externalData) => {
  return (
    externalData.links &&
    externalData.links.self && {
      links: {
        ...externalData.links,
        self: mountSelfLink,
      },
    }
  );
};

/**
 * Returns a response object as defined by the JSON:API
 * @param {string} type Value to use in the type attribute
 * @param {object} data Object with the attributes of
 * the data attribute on JSON:API response
 * @param {object} externalData Object with the attributes required
 * by the json-api-serializer to be used as externalData variable
 * on the Serializer
 */
const mountJSONAPIResponse = (
  type = 'no-name',
  data = {},
  externalData = {}
) => {
  const options = {
    jsonapiObject: false,
    ...applyAccountRelationship(data),
    ...applyInternalLinks(externalData),
    ...buildObjectFromPropertiesOf(externalData.topLevelMeta, 'topLevelMeta'),
    ...buildObjectFromPropertiesOf(externalData.topLevelLinks, 'topLevelLinks'),
  };

  Serializer.register(type, options);
  Serializer.register('accounts');

  const jsonAPIResponse = Serializer.serialize(type, data, externalData);
  const keysClearedResponse = removeRelKeywords(jsonAPIResponse);

  return getNonNullFields(keysClearedResponse);
};

module.exports = (options, req, res, next) => {
  const { type, location, status, payload, externalData } = options;

  if (location) {
    res.set(location.key, location.value);
  }

  const jsonAPIResponse = mountJSONAPIResponse(type, payload, externalData);

  res.status(status).json(jsonAPIResponse);

  next();
};
