const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        message: 'Bienvenido a la api de repaso'
    })
})

module.exports = router;