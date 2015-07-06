"use strict";

var cors = require("cors");

/**
 * CORS filter to enable Cross Origin Resource Sharing allowing to make AJAX
 * request to the API providers.
 *
 * @public
 * @param  {String} name Name of the filter
 * @param  {Object} config JavaScript object with filter configuration
 * @returns {Function} Middleware function implementing the filter.
 */
module.exports.init = function(name, config) { // eslint-disable-line no-unused-vars

  // TODO - Add configuration options
  return cors();
};
