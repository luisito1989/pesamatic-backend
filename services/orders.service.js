const { models } = require('./../libs/sequelize');

class OrderServices {
    constructor(){}
    
    async findAll(){
        const rta = await models.Order.findAll({
            include: ['customer']
        });
        return rta;
    }

    async findOne(id){
        const rta = await models.Order.findByPk(id, {
            include: [{
                association: 'customer',
                include: ['user']
            },
            'items']
        });
        return rta;
    }

    async create(data) {
        const rta = await models.Order.create(data);
        return data;
    }

    async addItem(data) {
        const rta = await models.OrderProduct.create(data);
        return rta;
    }

    async update(id, data) {
        const order = await this.findOne(id);
        const value = {
            ...order,
            ...data
        }
        const rta = await order.update(value);
        return rta;
    }

    async delete(id) {
        const order = await this.findOne(id);
        await order.destroy();
        return { id }
    }
}

module.exports = OrderServices;
