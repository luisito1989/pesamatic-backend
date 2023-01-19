const { Model, DataTypes, Sequelize } = require('sequelize');

const { USER_TABLE } = require('./users.model');
const { HEADQUARTER_TABLE } = require('./headquater.model');

const CUSTOMER_TABLE = 'customer';

const CustomerSchema = {
    id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    lastName: {
        field: 'last_name',
        allowNull: false,
        type: DataTypes.STRING
    },
    phone: {
        type: DataTypes.STRING
    },
    userId:{
        field: 'user_id',
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false,
        references: {
            model: USER_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    headquarterId:{
        field: 'headquarter_id',
        type: DataTypes.INTEGER,
        references: {
            model: HEADQUARTER_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    createdAt:{
        field: 'created_at',
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    }
}

class Customer extends Model {
    static associate(models) {
        this.belongsTo(models.User, {as: 'user'});
        this.belongsTo(models.Headquarter, {as: 'headquarter'});
        this.hasMany(models.Order, {
            as: 'orders',
            foreignKey: 'customerId'
        });
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: CUSTOMER_TABLE,
            modelName: 'Customer',
            timestamps: false
        }
    }
}

module.exports = { CUSTOMER_TABLE, CustomerSchema, Customer };
