const Joi = require("joi"); // Joi e um validador de dados

const postConsumer = { // Valida o corpo da requisição
    payload: Joi.object({ // Define o corpo da requisição
        id: Joi
            .number()
            .integer()
            .required(),
        name: Joi
            .string()
            .min(3)
            .max(50)
            .required(),
        address: Joi.object({
            city: Joi
                    .string()
                    .required()
            }).required()
        }).required(),
        
};

const getConsumer = { // Valida os parâmetros da requisição
    params: Joi.object({ // Define os parâmetros da requisição
        id: Joi
            .number()
            .integer()
            .required()
    })
};

module.exports = {postConsumer, getConsumer};