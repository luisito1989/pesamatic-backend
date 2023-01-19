const { Model, DataTypes, Sequelize } = require('sequelize');

const CATEGORY_NAME = 'categories';

const CategorySchema = {
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
    img: {
        allowNull: false,
        type: DataTypes.STRING
    },
    createdAt: {
        field: 'created_at',
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    }
}

class Category extends Model {
    static associate(models) {
        this.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'categoryId'
        });
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: CATEGORY_NAME,
            modelName: 'Category',
            timestamps: false
        }
    }
}

module.exports = { CATEGORY_NAME, CategorySchema, Category }
