'use strict';

/**
 * email-score service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::email-score.email-score');
