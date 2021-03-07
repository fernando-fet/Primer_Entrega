const express = require('express');
const router = express.Router();
const reservacionesControlles = require('../Controllers/reservacionesControlles');

router.get('/view', async(req, res) => {
    const reservas = await reservacionesControlles.Listar1(req.body);
    res.render('Resevaciones/view_reservaciones', { reservas });
});

router.post('/agregar', async(req, res) => {
    await reservacionesControlles.Agregar(req);
    res.redirect('/ventas/view');
});


router.get('/Eliminar/:id', async(req, res) => {
    await reservacionesControlles.Eliminar(req);
    res.redirect('/ventas/view');
});


router.post('/modificar/:id', async(req, res) => {
    const modifi = await reservacionesControlles.Modificar(req);
    res.redirect('/ventas/view', { modifi });
});

router.post('/modificar1/:id', async(req, res) => {
    await reservacionesControlles.Modificar1(req);
    res.redirect('/ventas/view');
});


module.exports = router;