const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(2);
const lastName = Joi.string().min(2);
const phone = Joi.string().min(8);
const photo = Joi.string().uri();
const userId = Joi.number().integer();
const headquarterId = Joi.number().integer();

const email = Joi.string().email();
const password = Joi.string().min(8);
const role = Joi.string();

const getCustomerSchema = Joi.object({
    id: id.required()
});

const createCustomerSchema = Joi.object({
    name: name.required(),
    lastName: lastName.required(),
    phone: phone,
    photo: photo,
    user: Joi.object({
        email: email.required(),
        password: password.required(),
        role: role
    }),
    headquarterId: headquarterId
});

const updateCustomerSchema = Joi.object({
    name: name,
    lastName: lastName,
    phone: phone,
    photo: photo,
    userId: userId,
    // headquarterId: headquarterId
});

module.exports = { getCustomerSchema, createCustomerSchema, updateCustomerSchema }
