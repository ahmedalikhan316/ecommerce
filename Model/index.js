const connection = require('../dbconnection');
const user = require('./definitions/user');
const productVariations = require('./definitions/productVariations');
const vendor = require('./definitions/vendor');
const product = require('./definitions/product');
const attributes = require('./definitions/attributes');
const productHasAttributes = require('./definitions/variationHasAttributes');

// 1 to Many
vendor.hasMany(product, { foreignKey: 'vendorId' });
product.belongsTo(vendor, { foreignKey: 'vendorId' });

// product and product variations Relation 1:M
product.hasMany(productVariations, { foreignKey: 'productId' });
productVariations.belongsTo(product, { foreignKey: 'productId' });

// productVariation has Many Attributes through productHasAttributes
productVariations.hasMany(productHasAttributes, { foreignKey: 'productVariationsId' });
productHasAttributes.belongsTo(productVariations, { foreignKey: 'productVariationsId' });

productHasAttributes.hasMany(attributes, { foreignKey: 'productHasAttributesId' });
attributes.belongsTo(productHasAttributes, { foreignKey: 'productHasAttributesId' });

const models = { user, vendor, product, productVariations, attributes, productHasAttributes };
const db = {};
db.connection = connection;
connection.models = models;

module.exports = { db, models };
