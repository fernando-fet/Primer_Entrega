
const express = require('express');
const router = express.Router();
const eventosControlles = require('../Controllers/eventosControlles');

router.get('/view', async(req, res) => {
    const Todoeventos = await eventosControlles.Listar(req.body);
    const tipo_evento = await eventosControlles.tipo_evento(req.body);
    const eventos = await eventosControlles.eventos(req.body);

    res.render('Eventos/view_eventoss', { Todoeventos, eventos,tipo_evento});
});


/*
router.get('/view', async(req, res) => {
    const eventos = await eventosControlles.eventos(req.body);
    res.render('Eventos/view_eventoss', { eventos });
});

*/


router.post('/agregar', async(req, res) => {
    await eventosControlles.Agregar(req);
    res.redirect('/event/view');
});


router.get('/Eliminar/:id', async(req, res) => {
    await eventosControlles.Eliminar(req);
    res.redirect('/event/view');
});


router.post('/modificar/:id', async(req, res) => {
    const modifi = await eventosControlles.Modificar(req);
    res.redirect('/event/view', { modifi });
});

router.post('/modificar1/:id', async(req, res) => {
    await eventosControlles.Modificar1(req);
    res.redirect('/event/view');
});





/////////////////////////////categoria/////////////////////////////



router.get('/Categoria', async(req, res) => {
    const Totipodeventos = await eventosControlles.Listar2(req.body);
    res.render('Eventos/view_categoria', { Totipodeventos });
});
router.post('/agregar1', async(req, res) => {
    await eventosControlles.Agregar2(req);
    res.redirect('/event/Categoria');
});


router.get('/Eliminar1/:id', async(req, res) => {
    await eventosControlles.Eliminar2(req);
    res.redirect('/event/Categoria');
});


router.post('/modificar/:id', async(req, res) => {
    const modifi = await eventosControlles.Modificar(req);
    res.redirect('/event/Categoria', { modifi });
});

router.post('/modificar2/:id', async(req, res) => {
    await eventosControlles.Modificar2(req);
    res.redirect('/event/Categoria');
});











/*
/////////////////////// categorias///////////////////////

router.get('/view', async(req, res) => {
    const Todaslacate = await categoriasControlles.Listar2(req.body);
    res.render('productos/view_productos', { Todaslacate });
});
*/




module.exports = router;