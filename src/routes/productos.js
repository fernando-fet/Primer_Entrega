const express = require('express');
const router = express.Router();
const productosControlles = require('../Controllers/productosControlles');

router.get('/view', async(req, res) => {
    const todoproductos = await productosControlles.Listar(req.body);
    const categorias = await productosControlles.categorias(req.body);
    res.render('productos/view_productos', { todoproductos,categorias });
});



router.post('/agregar', async(req, res) => {
    await productosControlles.Agregar(req);
    res.redirect('/product/view');
});


router.get('/Eliminar/:id', async(req, res) => {
    await productosControlles.Eliminar(req);
    res.redirect('/product/view');
});


router.post('/modificar/:id', async(req, res) => {
    const modifi = await productosControlles.Modificar(req);
    res.redirect('/product/view', { modifi });
});

router.post('/modificar1/:id', async(req, res) => {
    await productosControlles.Modificar1(req);
    res.redirect('/product/view');
});












/*
/////////////////////// categorias///////////////////////

router.get('/view', async(req, res) => {
    const Todaslacate = await categoriasControlles.Listar2(req.body);
    res.render('productos/view_productos', { Todaslacate });
});
*/




module.exports = router;