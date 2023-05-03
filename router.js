const {find, create, getById} = require("./controllers/consumer.controller");
const {find, create, getById} = require("./controllers/product.controller");
const schema = require("./schemas/consumer.schema");
const schema = require("./schemas/product.schema");

const router = [
    {
        method: "GET",
        path: "/",
        handler: (request, h) => {
            return "Hello world";
        }
    },
    {
        method: "GET",
        path: "/consumers",
        handler: find
    },
    {
        method: "GET",
        path: "/products",
        handler: find
    },
    {
        method: "GET",
        path: "/products/{id}",
        options: {
            validate: schema.getProduct,
            handler: getById
        }
    },
    {
        method: "GET",
        path: "/consumers/{id}",
        options: {
            validate: schema.getConsumer,
            handler: getById
        }
    },
    {
        method: "POST",
        path: "/consumers",
        options: {
            validate: schema.postConsumer,
            handler: create
        }
    }
];

module.exports = router;