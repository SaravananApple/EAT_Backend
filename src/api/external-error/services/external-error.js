'use strict';

/**
 * external-error service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::external-error.external-error');
