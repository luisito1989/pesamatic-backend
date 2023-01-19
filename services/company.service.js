const { models } = require('../libs/sequelize');

class CompanyServices {
    constructor(){}

    async findAll(){
        const rta = await models.Company.findAll({
            include: ['headquarters']
        });
        return rta;
    }

    async findOne(id){
        const rta = await models.Company.findByPk(id, {
            include: ['headquarters']
        });
        return rta;
    }

    async create(data){
        const rta = await models.Company.create(data);
        return rta;
    }

    async update(id, data){
        const company = await this.findOne(id);
        const value = {
            ...company,
            ...data
        }
        const rta = await company.update(value);
        return rta;
    }

    async delete(id){
        const company = await this.findOne(id);
        await company.destroy();
        return { id }
    }
}

module.exports = CompanyServices;
