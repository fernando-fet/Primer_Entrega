const express = require('express');
const router = express.Router();
const direccionesControlles = require('../Controllers/direccionesControlles');

router.get('/view', async(req, res) => {
    const publicity = await direccionesControlles.Listar1(req.body);
    res.render('Direcciones/view_direcciones', { publicity });
});

router.post('/agregar', async(req, res) => {
    await direccionesControlles.Agregar(req);
    res.redirect('/Direcciones/view');
});


router.get('/Eliminar/:id', async(req, res) => {
    await direccionesControlles.Eliminar(req);
    res.redirect('/Direcciones/view');
});


router.post('/modificar/:id', async(req, res) => {
    const modifi = await direccionesControlles.Modificar(req);
    res.redirect('/Direcciones/view', { modifi });
});

router.post('/modificar1/:id', async(req, res) => {
    await direccionesControlles.Modificar1(req);
    res.redirect('/Direcciones/view');
});


module.exports = router;