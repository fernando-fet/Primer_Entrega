const express = require('express');
const router = express.Router();
const noticiasControlles = require('../Controllers/noticiasControlles');

router.get('/view', async(req, res) => {
    const NOTICASSS = await noticiasControlles.listAll(req.body);
    res.render('Noticias/view_noticias', { NOTICASSS });
});

router.post('/agregar', async(req, res) => {
    await noticiasControlles.Agregar(req);
    res.redirect('/Noticias/view');
});


router.get('/Eliminar/:id', async(req, res) => {
    await noticiasControlles.Eliminar(req);
    res.redirect('/Noticias/view');
});


router.post('/modificar/:id', async(req, res) => {
    const modifi = await noticiasControlles.Modificar(req);
    res.redirect('/Noticias/view', { modifi });
});

router.post('/modificar1/:id', async(req, res) => {
    await noticiasControlles.Modificar1(req);
    res.redirect('/Noticias/view');
});
module.exports = router;