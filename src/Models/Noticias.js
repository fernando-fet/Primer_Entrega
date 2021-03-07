'use strict'
const pool = require('../database');


module.exports = function() {

    async function listAll(req) {
        let query = `SELECT * FROM noticias `;
        const data = await pool.query(query)
        return data
    }
    async function Agregar(req) {
        await pool.query('INSERT INTO noticias set ?', [req.body]);
    }
    async function Eliminar(req) {
        const { id } = req.params;
        await pool.query('DELETE FROM noticias where id_noticia=?', [id]);
    }

    async function Modificar(req) {
        const { id } = req.params;
        await pool.query('SELECT FROM noticias where id_noticia=?', [id]);
    }

    async function Modificar1(req) {
        const { id } = req.params;
        await pool.query('UPDATE noticias set ? where id_noticia=?', [req.body, id]);
    }




    return {
        listAll,
        Agregar,
        Eliminar,
        Modificar,
        Modificar1,

    }



}