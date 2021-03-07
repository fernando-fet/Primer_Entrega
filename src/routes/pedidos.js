const express = require('express');
const router = express.Router();
const pedidosControlles = require('../Controllers/pedidosControlles');

router.get('/view', async(req, res) => {
    const todasventas = await pedidosControlles.Listar(req.body);
    res.render('Pedidos/pedidos', { todasventas });
});

router.post('/agregar', async(req, res) => {
    await pedidosControlles.Agregar(req);
    res.redirect('/Pedidos/view');
});


router.get('/Eliminar/:id', async(req, res) => {
    await pedidosControlles.Eliminar(req);
    res.redirect('/Pedidos/view');
});


router.post('/modificar/:id', async(req, res) => {
    const modifi = await pedidosControlles.Modificar(req);
    res.redirect('/Pedidos/view', { modifi });
});

router.post('/modificar1/:id', async(req, res) => {
    await pedidosControlles.Modificar1(req);
    res.redirect('/Pedidos/view');
});



module.exports = router;