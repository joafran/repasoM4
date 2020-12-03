const express = require('express');
const router = express.Router();

const { Task } = require('../models/');

router.get('/', (req, res) => {
    // Task.findAll -> devuelve un array  -> where
    // Task.findOne -> devuelve un objeto -> where
    // Task.findByPk -> devuelve un objeto -> busca por PrimaryKey
    Task.findAll()
        .then(data => {
            res.json(data);
        })
    // SELECT * FROM tasks
})

router.post('/', ((req, res) => {
    const { name, projectId } = req.body;
    Task.create({
        name,
        status: 'incomplete',
        projectId
    })
        .then(respuesta => {
            res.json(respuesta);
        })
        .catch(err => {
            console.log(err);
        })
}))

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { name, status } = req.body;
    Task.update({
        name,
        status
    }, {
        where: { id },
        returning: true
    })
        .then(respuesta => {
            res.json(respuesta[1])
        })
})

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    Promise.all([Task.findByPk(id), Task.destroy({ where: { id } })])
        .then(respuesta => {
            res.json(respuesta[0])
        })
})

module.exports = router;