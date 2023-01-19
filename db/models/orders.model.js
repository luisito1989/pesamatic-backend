const { Model, DataTypes, Sequelize } = require('sequelize');

const { CUSTOMER_TABLE} = require('./customer.model');

const ORDER_TABLE = 'orders';

const OrderSchema = {
    id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    customerId: {
        field: 'customer_id',
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: CUSTOMER_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    createdAt: {
        field: 'created_at',
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    },
    // Los campos virtual no se guardan en la BD y se utilizan como soporte para calculos simples y con pocos campos
    total: {
        type: DataTypes.VIRTUAL,
        get() {
            // en este caso 'items' corresponde al nombre de la relacion indicada en belongToMany
            if (this.items.length > 0) {
                return this.items.reduce((total, item) => {
                    // OrderProduct corresponde a la informacion obtenida usando la relacion belongToMany
                    return total + (item.price * item.OrderProduct.amount);
                }, 0);
            }
            return 0;
        }
    }
}

class Order extends Model {
    static associate(models){
        this.belongsTo(models.Customer, {as: 'customer'});
        this.belongsToMany(models.Product, {
           as: 'items',
           through: models.OrderProduct,
           foreignKey: 'orderId',
           otherKey: 'productId'
        });
    }

    static config(sequelize){
        return {
            sequelize,
            tableName: ORDER_TABLE,
            modelName: 'Order',
            timestamps: false
        }
    }
}

module.exports = { ORDER_TABLE, OrderSchema, Order }
