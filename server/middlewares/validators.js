const Joi = require('joi')

const authQuestionSchema = Joi.object({
    Title: Joi.string().required(),
    Body: Joi.string().required(),
    Tags: Joi.array(),
    userPosted: Joi.string(),
    userId: Joi.string()
})

//schema to validate user
const authUserSchema = Joi.object({
    name: Joi.string(),
    email: Joi.string().required().lowercase().email(),
    password: Joi.string().min(8).required(),
    about: Joi.string(),
    tags: Joi.array(),
})

module.exports = {
    authQuestionSchema,
    authUserSchema
}