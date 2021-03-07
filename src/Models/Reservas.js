'use strict'
const pool = require('../database');
module.exports = function() {

    async function Listar1(req) {
        let query = `SELECT * FROM reservaciones`;
        const data = await pool.query(query)
        return data
    }
    async function Agregar(req) {
        await pool.query('INSERT INTO reservaciones set ?', [req.body]);
    }
    async function Eliminar(req) {
        const { id } = req.params;
        await pool.query('DELETE FROM reservaciones where id_reservaciones=?', [id]);
    }

    async function Modificar(req) {
        const { id } = req.params;
        await pool.query('SELECT FROM reservaciones where id_reservaciones=?', [id]);
    }

    async function Modificar1(req) {
        const { id } = req.params;
        await pool.query('UPDATE reservaciones  set ? where id_reservaciones=?', [req.body, id]);
    }




    return {
        Listar1,
        Agregar,
        Eliminar,
        Modificar,
        Modificar1,
        

    }



}