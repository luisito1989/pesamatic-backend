const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3);
const rif = Joi.string().min(10);
const social = Joi.string().min(3);
const webPage = Joi.string().uri();

const getCompanySchema = Joi.object({
    id: id.required()
});

const createCompanySchema = Joi.object({
    name: name.required(),
    rif: rif.required(),
    social: social,
    webPage: webPage
});

const updateCompanySchema = Joi.object({
    name: name,
    rif: rif,
    social: social,
    webPage: webPage
});

module.exports = { getCompanySchema, createCompanySchema, updateCompanySchema }
