const { Model, DataTypes, Sequelize } = require('sequelize');
const { COMPANY_TABLE } = require('./company.model');

const HEADQUARTER_TABLE = 'headquarter';

const HeadquarterSchema = {
    id:{
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    companyId:{
        field: 'company_id',
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: COMPANY_TABLE,
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    address:{
        allowNull: false,
        type: DataTypes.STRING
    },
    phone:{
        type: DataTypes.STRING
    },
    createdAt:{
        field: 'created_at',
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    }
}

class Headquarter extends Model {
    static associate(models){
        this.belongsTo(models.Company, {as: 'company'});
        this.hasMany(models.Customer, {
            as: 'customers',
            foreignKey: 'headquarterId'
        });
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: HEADQUARTER_TABLE,
            modelname: 'Headquarter',
            timestamps: false
        }
    }
}

module.exports = { HEADQUARTER_TABLE, HeadquarterSchema, Headquarter }
