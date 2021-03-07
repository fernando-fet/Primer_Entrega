const express = require('express');
const router = express.Router();
const categoriasControlles = require('../Controllers/categoriasControlles');

router.get('/view', async(req, res) => {
    const Todaslacate = await categoriasControlles.Listar(req.body);
    res.render('Categorias/view_cate', { Todaslacate });
});
router.post('/agregar', async(req, res) => {
    await categoriasControlles.Agregar(req);
    res.redirect('/Categorias/view');
});


router.get('/Eliminar/:id', async(req, res) => {
    await categoriasControlles.Eliminar(req);
    res.redirect('/Categorias/view');
});


router.post('/modificar/:id', async(req, res) => {
    const modifi = await categoriasControlles.Modificar(req);
    res.redirect('/Categorias/view', { modifi });
});

router.post('/modificar1/:id', async(req, res) => {
    await categoriasControlles.Modificar1(req);
    res.redirect('/Categorias/view');
});
module.exports = router;