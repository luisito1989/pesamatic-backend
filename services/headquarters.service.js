const { models } = require('./../libs/sequelize');

class HeadquarterServices {
    constructor(){}
    
    async findAll(){
        const rta = await models.Headquarter.findAll({
            include: ['company', 'customers']
        });
        return rta;
    }

    async findOne(id){
        const rta = await models.Headquarter.findByPk(id, {
            include: ['company', 'customers']
        });
        return rta;
    }

    async create(data) {
        const rta = await models.Headquarter.create(data);
        return rta;
    }

    async update(id, data) {
        const headquarter = await this.findOne(id);
        const value = {
            ...headquarter,
            ...data
        }
        const rta = await headquarter.update(value);
        return rta;
    }

    async delete(id) {
        const headquarter = await this.findOne(id);
        await headquarter.destroy();
        return { id }
    }
}

module.exports = HeadquarterServices;
