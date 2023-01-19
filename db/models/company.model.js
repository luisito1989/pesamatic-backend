const { Model, DataTypes, Sequelize } = require('sequelize');

const COMPANY_TABLE = 'company';

const CompanySchema = {
    id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    name: {
        unique: true,
        type: DataTypes.STRING,
        allowNull: false
    },
    rif: {
        unique: true,
        type: DataTypes.STRING,
        allowNull: false
    },
    social: {
        unique: true,
        type: DataTypes.STRING
    },
    webPage: {
        field: 'web_page',
        unique: true,
        type: DataTypes.STRING
    },
    createdAt: {
        field: 'created_at',
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    }
}

class Company extends Model {
    static associate(models) {
        this.hasMany(models.Headquarter, {
            as: 'headquarters',
            foreignKey: 'companyId'
        });
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: COMPANY_TABLE,
            modelName: 'Company',
            timestamps: false
        }
    }
}

module.exports = { COMPANY_TABLE, CompanySchema, Company };
