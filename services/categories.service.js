const { models } = require('../libs/sequelize');
const boom = require('@hapi/boom');

class CategoryServices {
    constructor() {}

    async findAll() {
        const rta = await models.Category.findAll({
            include: ['products']
        });
        return rta;
    }

    async findOne(id) {
        const rta = await models.Category.findByPk(id, {
            include: ['products']
        });
        return rta;
    }

    async create(data) {
        const rta = await models.Category.create(data);
        return rta;
    }

    async update(id, data) {
        const category = await this.findOne(id);
        const values = {
            ...category,
            ...data
        }
        const rta = await category.update(values);
        return rta;
    }

    async delete(id) {
        const category = await this.findOne(id);
        await category.destroy();
        return { id };
    }

}

module.exports = CategoryServices;
