const Joi = require("joi"); // Joi e um validador de dados

// const postProduct = { // Valida o corpo da requisição
//     payload: Joi.object({ // Define o corpo da requisição
//         id: Joi
//             .number()
//             .integer()
//             .required(),
//         ean: Joi
//             .number()
//             .integer()
//             .required(),
//         title: Joi
//             .string()
//             .min(3)
//             .max(50)
//             .required(),
//         brand: Joi
//             .string()
//             .min(3)
//             .max(50)
//             .required(),
//         attributes: Joi.object({
//             type: Joi
//                 .string()
//                 .required(),
//             value: Joi
//                 .string()
//                 .required(),
//             label: Joi
//                 .string()
//                 .required(),
//         }).required(),
//         cost_value: Joi
//             .number()
//             .integer()
//             .required(),
//         sell_value: Joi
//             .number()
//             .integer()
//             .required(),
//         categories: Joi.object({
//             id: Joi
//                 .string()
//                 .required(),
//             name: Joi
//                 .string()
//                 .required(),
//         }).required(),
//     }).required(),
// } 

// const getProduct = { // Valida os parâmetros da requisição
//     params: Joi.object({ // Define os parâmetros da requisição
//         id: Joi
//             .number()
//             .integer()
//             .required()
//     })
// };
//     module.exports = {postProduct, getProduct};

const Joi = require('joi');

const payloadSchema = Joi.object({
    id: Joi.string().required(),
    ean: Joi.string().required(),
    title: Joi.string().required(),
    brand: Joi.string().required(),
    attributes: Joi.array().items(Joi.object({
        type: Joi.string().required(),
        value: Joi.string().required(),
        label: Joi.string().required()
    })).required(),
    cost_value: Joi.number().required(),
    sell_value: Joi.number().required(),
    categories: Joi.array().items(Joi.object({
        id: Joi.string().required(),
        name: Joi.string().required()
    })).required()
});

module.exports = payloadSchema;