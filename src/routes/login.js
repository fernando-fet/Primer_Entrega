const express = require('express');
const router = express.Router();
const loginControlles = require('../Controllers/loginControlles');

router.get('/view', async(req, res) => {
    const reguistro = await loginControlles.Listar(req.body);
    const rol = await loginControlles.rol(req.body);
    res.render('login/view_reguistro', { reguistro,rol });
});

router.post('/agregar', async(req, res) => {
    await loginControlles.Agregar(req);
    res.redirect('/login/view');
});


router.get('/Eliminar/:id', async(req, res) => {
    await loginControlles.Eliminar(req);
    res.redirect('/login/view');
});


router.post('/modificar/:id', async(req, res) => {
    const modifi = await loginControlles.Modificar(req);
    res.redirect('/login/view', { modifi });
});

router.post('/modificar1/:id', async(req, res) => {
    await loginControlles.Modificar1(req);
    res.redirect('/login/view');
});


////////////////////rol


router.get('/roles', async(req, res) => {
    const roles = await loginControlles.rol(req.body);
    res.render('login/view_rol', {roles });
});

router.post('/agregar1', async(req, res) => {
    await loginControlles.Agregar1(req);
    res.redirect('/login/roles');
});


router.get('/Eliminar1/:id', async(req, res) => {
    await loginControlles.Eliminar1(req);
    res.redirect('/login/roles');
});


router.post('/modificar/:id', async(req, res) => {
    const modifi = await loginControlles.Modificar(req);
    res.redirect('/login/roles', { modifi });
});

router.post('/modificar2/:id', async(req, res) => {
    await loginControlles.Modificar2(req);
    res.redirect('/login/roles');
});











/*
/////////////////////// categorias///////////////////////

router.get('/view', async(req, res) => {
    const Todaslacate = await categoriasControlles.Listar2(req.body);
    res.render('productos/view_productos', { Todaslacate });
});
*/




module.exports = router;