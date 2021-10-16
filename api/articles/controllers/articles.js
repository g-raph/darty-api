const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  async findOne(ctx) {
    const { Slug } = ctx.params;

    const entity = await strapi.services.articles.findOne({ Slug });
    return sanitizeEntity(entity, { model: strapi.models.articles });
  },
};

