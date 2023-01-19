const { Model, DataTypes, Sequelize } = require('sequelize');

const USER_TABLE = 'users';

const UserSchema = {
    id: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    email: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING
    },
    password: {
        allowNull: false,
        type: DataTypes.STRING
    },
    role: {
        allowNull: false,
        type: DataTypes.STRING,
        defaultValue: 'customer'
    },
    cretaedAt: {
        field: 'created_at',
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    }
}

class User extends Model {
    static associate(models){
        this.hasOne(models.Customer, {
            as: 'customer',
            foreignKey: 'userId'
        });
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: USER_TABLE,
            modelName: 'User',
            timestamps: false
        }
    }
}

module.exports = { USER_TABLE, UserSchema, User }