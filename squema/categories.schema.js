const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(20);
const img = Joi.string().uri();

const getCategorySchema = Joi.object({
    id: id.required()
});

const createCategorySchema = Joi.object({
    name: name.required(),
    img: img.required()
});

const updateCategorySchema = Joi.object({
    name: name,
    img: img
});

module.exports = { getCategorySchema, createCategorySchema, updateCategorySchema };
