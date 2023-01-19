const { User, UserSchema } = require('./users.model');
const { Category, CategorySchema } = require('./categories.model');
const { Company, CompanySchema } = require('./company.model');
const { Headquarter, HeadquarterSchema } = require('./headquater.model');
const { Customer, CustomerSchema } = require('./customer.model');
const { Product, ProductSchema } = require('./products.model');
const { Order, OrderSchema } = require('./orders.model');
const { OrderProduct, OrderProductSchema } = require('./order-product.model');

const setupModels = (sequelize) => {
    User.init(UserSchema, User.config(sequelize));
    Category.init(CategorySchema, Category.config(sequelize));
    Company.init(CompanySchema, Company.config(sequelize));
    Headquarter.init(HeadquarterSchema,Headquarter.config(sequelize));
    Customer.init(CustomerSchema, Customer.config(sequelize));
    Product.init(ProductSchema, Product.config(sequelize));
    Order.init(OrderSchema, Order.config(sequelize));
    OrderProduct.init(OrderProductSchema, OrderProduct.config(sequelize));

    User.associate(sequelize.models);
    Category.associate(sequelize.models);
    Company.associate(sequelize.models);
    Headquarter.associate(sequelize.models);
    Customer.associate(sequelize.models);
    Product.associate(sequelize.models);
    Order.associate(sequelize.models);
    // OrderProduct.associate(sequelize.models);
}

module.exports = setupModels;
