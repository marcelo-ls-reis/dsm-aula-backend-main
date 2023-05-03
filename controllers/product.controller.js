const productBusiness = require('../repositories/product.repository');

const create = (request, h) => {
    productBusiness.save(request.payload);
    return "created";
}

const find = (request, h) => {
    return productBusiness.findAll();
}

const getById =  (request, h) => {
    const id = request.params.id;

    const product = productBusiness.findByid(id);
    
    if(product) {
        return h.response(product).code(200);
    }
    return h.response("Not found").code(404);
}

module.exports = {find, create, getById};