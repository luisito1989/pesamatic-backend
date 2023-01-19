const { Model, DataTypes, Sequelize } = require('sequelize');

const { ORDER_TABLE } = require('../models/orders.model');
const { PRODUCT_TABLE } = require('../models/products.model');

const ORDER_PRODUCT_TABLE = 'orders_products';

const OrderProductSchema = {
    id: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    amount: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    orderId: {
        field: 'order_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: ORDER_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    productId: {
        field: 'product_id',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: PRODUCT_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    createdAt: {
        field: 'created_at',
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    }
}

class OrderProduct extends Model {
    static associate(models){
        // wait
    }
    static config(sequelize){
        return {
            sequelize,
            tableName: ORDER_PRODUCT_TABLE,
            modelName: 'OrderProduct',
            timestamps: false
        }
    }
}

module.exports = { ORDER_PRODUCT_TABLE, OrderProductSchema, OrderProduct }
