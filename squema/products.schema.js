const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3);
const price = Joi.number();
const description = Joi.string().min(3);
const categoryId = Joi.number().integer();
const photo1 = Joi.string().uri();
const photo2 = Joi.string().uri();
const photo3 = Joi.string().uri();
const photo4 = Joi.string().uri();

const limit = Joi.number().integer();
const offset = Joi.number().integer();

const getProductSchema = Joi.object({
    id: id.required()
});

const createProductSchema = Joi.object({
    name: name.required(),
    price: price.required(),
    description: description.required(),
    categoryId: categoryId.required(),
    photo1: photo1.required(),
    photo2: photo2,
    photo3: photo3,
    photo4: photo4
});

const updateProductSchema = Joi.object({
    name: name,
    price: price,
    description: description,
    categoryId: categoryId,
    photo1: photo1,
    photo2: photo2,
    photo3: photo3,
    photo4: photo4
});

const paginationSchema = Joi.object({
    limit,
    offset
});

module.exports = { getProductSchema, createProductSchema, updateProductSchema, paginationSchema }
