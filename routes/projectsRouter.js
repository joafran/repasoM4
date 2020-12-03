const express = require('express');
const router = express.Router();
const { Project } = require('../models/');

router.get('/', (req, res) => {
    Project.findAll()
        .then(data => {
            res.json(data);
        })
})

router.post('/', (req, res) => {
    const { name, description } = req.body;
    Project.create({
        name,
        description
    })
        .then(respuesta => {
            res.json(respuesta);
        })
        .catch(err => {
            console.log(err);
            // res.status(500).json({
            //     message: 'Ocurrio un error'
            // })
        })
})

module.exports = router;