'use strict'
const pool = require('../database');


module.exports = function() {

    async function listAll(req) {
        let query = `SELECT * FROM autos `;
        const data = await pool.query(query)
        return data
    }
    async function Agregar(req) {
        await pool.query('INSERT INTO autos set ?', [req.body]);
    }
    async function Eliminar(req) {
        const { id } = req.params;
        await pool.query('DELETE FROM autos where id=?', [id]);
    }

    async function Modificar(req) {
        const { id } = req.params;
        await pool.query('SELECT FROM autos where id=?', [id]);
    }

    async function Modificar1(req) {
        const { id } = req.params;
        await pool.query('UPDATE autos set ? where id=?', [req.body, id]);
    }




    return {
        listAll,
        Agregar,
        Eliminar,
        Modificar,
        Modificar1,

    }



}