'use strict';

/**
 * check-point service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::check-point.check-point');
