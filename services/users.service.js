const { models } = require('./../libs/sequelize');

class UserServices {
    constructor(){}
    
    async findAll(){
        const rta = await models.User.findAll({
            include: ['customer']
        });
        return rta;
    }

    async findOne(id){
        const rta = await models.User.findByPk(id, {
            include: ['customer']
        });
        return rta;
    }

    async create(data) {
        const rta = await models.User.create(data);
        return data;
    }

    async update(id, data) {
        const user = await this.findOne(id);
        const value = {
            ...user,
            ...data
        }
        const rta = await user.update(value);
        return rta;
    }

    async delete(id) {
        const user = await this.findOne(id);
        await user.destroy();
        return { id }
    }
}

module.exports = UserServices;
