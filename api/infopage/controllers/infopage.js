const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  async findOne(ctx) {
    const { slug } = ctx.params;

    const entity = await strapi.services.infopage.findOne({ slug });
    return sanitizeEntity(entity, { model: strapi.models.infopage });
  },
};
