const data = []; // Simula um banco de dados

const save = (consumer) => { // Salva um consumidor

    data.push(consumer); // Adiciona o consumidor no array

    return consumer; // Retorna o consumidor salvo
};

const findAll = () => { // Retorna todos os consumidores
    return data;
}

const findById = (id) => { // Retorna um consumidor pelo id

    return data.find(c => c.id == id);
}

module.exports = {save, findAll, findById}; // Exporta os métodos para serem usados em outros arquivos