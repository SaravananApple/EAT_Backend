'use strict';

/**
 * external-error router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::external-error.external-error');
