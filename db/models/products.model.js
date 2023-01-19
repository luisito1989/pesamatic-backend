const { Model, DataTypes, Sequelize } = require('sequelize');

const { CATEGORY_NAME } = require('./categories.model');

const PRODUCT_TABLE = 'products';

const ProductSchema = {
    id:{
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    name:{
        type: DataTypes.STRING,
        allowNull: false
    },
    price:{
        allowNull: false,
        type: DataTypes.FLOAT
    },
    description:{
        allowNull: false,
        type: DataTypes.STRING
    },
    categoryId:{
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: CATEGORY_NAME,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    photo1:{
        allowNull: false,
        type: DataTypes.STRING
    },
    photo2:{
        type: DataTypes.STRING
    },
    photo3:{
        type: DataTypes.STRING
    },
    photo4:{
        type: DataTypes.STRING
    },
    createdAt:{
        field: 'created_at',
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    }
}

class Product extends Model {
    static associate(models){
        this.belongsTo(models.Category, { as: 'category' });
    }
    static config(sequelize){
        return {
            sequelize,
            tableName: PRODUCT_TABLE,
            modelName: 'Product',
            timestamps: false
        }
    }
}

module.exports = { PRODUCT_TABLE, ProductSchema, Product }
