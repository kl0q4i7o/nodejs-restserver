const { response, request } = require('express');

const usersGet = (req = request, res = response) => {
    const { q, name = 'No name.', api_key = 'No api key', page = 2, limit = 5 } = req.query;
    res.json({
        msg: 'Users Post - Controller',
        q,
        name,
        api_key,
        page,
        limit,
    });
};

const usersPost = (req, res = response) => {
    // Aquí recibimos los datos.
    const {name, age} = req.body;
    res.json({
        msg: 'Users Post - Controller',
        name,
        age,
    })
}

const usersPut = (req, res = response) => {
    const id = req.params.id;
    res.json({
        msg: 'Users Put - Controller',
        id,
    })
}

const usersPatch = (req, res = response) => {
    res.json({
        msg: 'Users Path - Controller'
    })
}

const usersDelete = (req, res = response) => {
    res.json({
        msg: 'Users Delete - Controller'
    })
}

module.exports = {
    usersGet,
    usersPut,
    usersPatch,
    usersPost,
    usersDelete,
};