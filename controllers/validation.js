const Joi = require('@hapi/joi');

const adminRegisterValidation = data => {

    const schema = Joi.object({
    name: Joi.string().min(3).required(),
    password: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email()
    })
    return schema.validate(data)
}

const adminLoginValidation = (data) => {

    const schema = Joi.object({
    password: Joi.string().min(6).max(25).required(),
    email: Joi.string().min(6).required().email()
    })
    return schema.validate(data)
}

module.exports.adminRegisterValidation = adminRegisterValidation;
module.exports.adminLoginValidation = adminLoginValidation;