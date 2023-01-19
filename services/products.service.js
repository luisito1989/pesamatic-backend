const { models } = require('./../libs/sequelize');

class ProductServices {
    constructor(){}
    
    async findAll(query){
        // permite agregar los datos al findAll de forma dinamica y
        // agrega limit y offset si los dos estan en query
        const options ={
            include: ['category'],
        }
        const { limit, offset} = query;
        if ( limit && offset ) {
            options.limit = limit,
            options.offset = offset
        }
        const rta = await models.Product.findAll(options);
        return rta;
    }

    async findOne(id){
        const rta = await models.Product.findByPk(id);
        return rta;
    }

    async create(data) {
        const rta = await models.Product.create(data);
        return data;
    }

    async update(id, data) {
        const product = await this.findOne(id);
        const value = {
            ...product,
            ...data
        }
        const rta = await product.update(value);
        return rta;
    }

    async delete(id) {
        const product = await this.findOne(id);
        await product.destroy();
        return { id }
    }
}

module.exports = ProductServices;
