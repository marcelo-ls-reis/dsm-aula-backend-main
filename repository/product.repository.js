const data = []; // Simula um banco de dados

const save = (product) => { // Salva um produto
    data.push(product); // Adiciona o produto no array
    return product; // Retorna o produto salvo
};

const findAll = () => { // Retorna todos os produtos
    return data;
}

const findById = (id) => { // Retorna um produto pelo id
    return data.find(p => p.id == id);
}

module.exports = {save, findAll, findById}; // Exporta os métodos para serem usados em outros arquivos
