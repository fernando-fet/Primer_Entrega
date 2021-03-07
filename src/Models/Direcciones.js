'use strict'
const pool = require('../database');
module.exports = function() {

    async function Listar1(req) {
        let query = `SELECT  di.direccion , di.barrio , di.adiccional, us.nombre , us.apellidos
        FROM direcciones di , usuarios us
        WHERE di.id_usuario = us.id_usuario`;
        const data = await pool.query(query)
        return data
    }
    async function Agregar(req) {
        await pool.query('INSERT INTO direcciones set ?', [req.body]);
    }
    async function Eliminar(req) {
        const { id } = req.params;
        await pool.query('DELETE FROM direcciones where id_direcciones=?', [id]);
    }

    async function Modificar(req) {
        const { id } = req.params;
        await pool.query('SELECT FROM direcciones where id_direcciones=?', [id]);
    }

    async function Modificar1(req) {
        const { id } = req.params;
        await pool.query('UPDATE direcciones  set ? where id_direcciones=?', [req.body, id]);
    }




    return {
        Listar1,
        Agregar,
        Eliminar,
        Modificar,
        Modificar1,
        

    }



}