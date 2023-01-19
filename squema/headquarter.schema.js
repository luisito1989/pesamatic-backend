const Joi = require('joi');

const id = Joi.number().integer();
const companyId = Joi.number().integer();
const address = Joi.string().min(5);
const phone = Joi.string().max(15);

const name = Joi.string().min(3);
const rif = Joi.string().min(10);
const social = Joi.string().min(3);
const webPage = Joi.string().uri();

const getHeadquarterSchema = Joi.object({
    id: id.required()
});

const createHeadquarterSchema = Joi.object({
    address: address.required(),
    phone: phone,
    company: Joi.object({
        name: name.required(),
        rif: rif.required(),
        social: social,
        webPage: webPage
    })
});

const updateHeadquarterSchema = Joi.object({
    address: address,
    phone: phone,
    companyId: companyId,
});

module.exports = { getHeadquarterSchema, createHeadquarterSchema, updateHeadquarterSchema };
