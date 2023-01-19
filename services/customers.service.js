const { models } = require('./../libs/sequelize');

class CustomerServices {
    constructor(){}
    
    async findAll(){
        const rta = await models.Customer.findAll({
            include: ['user', 'headquarter']
        });
        return rta;
    }

    async findOne(id){
        const rta = await models.Customer.findByPk(id,{
            include: ['user', 'headquarter']
        });
        return rta;
    }

    async create(data) {
        const rta = await models.Customer.create(data, {
            include: ['user']
        });
        return rta;
    }

    async update(id, data) {
        const customer = await this.findOne(id);
        const value = {
            ...customer,
            ...data
        }
        const rta = await customer.update(value);
        return rta;
    }

    async delete(id) {
        const customer = await this.findOne(id);
        await customer.destroy();
        return { id }
    }
}

module.exports = CustomerServices;
