'use strict';

/**
 * check-point router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::check-point.check-point');
