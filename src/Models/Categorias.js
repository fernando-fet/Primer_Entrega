'use strict'
const pool = require('../database');
module.exports = function() {

    async function Listar(req) {
        let query = `SELECT * FROM categoria_producto`;
        const data = await pool.query(query)
        return data
    }
    async function Agregar(req) {
        await pool.query('INSERT INTO categoria_producto set ?', [req.body]);
    }
    async function Eliminar(req) {
        const { id } = req.params;
        await pool.query('DELETE FROM categoria_producto where id_categoria=?', [id]);
    }

    async function Modificar(req) {
        const { id } = req.params;
        await pool.query('SELECT FROM categoria_producto where id_categoria=?', [id]);
    }

    async function Modificar1(req) {
        const { id } = req.params;
        await pool.query('UPDATE categoria_producto  set ? where id_categoria=?', [req.body, id]);
    }




    return {
        Listar,
        Agregar,
        Eliminar,
        Modificar,
        Modificar1,
        

    }



}