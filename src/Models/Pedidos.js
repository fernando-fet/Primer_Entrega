
'use strict'
const pool = require('../database');


module.exports = function() {

    async function Listar(req) {
        let query = `SELECT   us.nombre , us.apellidos , di.direccion , di.barrio 
        FROM pedidos pe , direcciones di , usuarios us
        WHERE pe.id_usuario = us.id_usuario 
        AND pe.id_direcciones = di.id_direcciones`;
        const data = await pool.query(query)
        return data
    }
    async function Agregar(req) {
        await pool.query('INSERT INTO pedidos set ?', [req.body]);
    }
    async function Eliminar(req) {
        const { id } = req.params;
        await pool.query('DELETE FROM pedidos where id_pedidos=?', [id]);
    }

    async function Modificar(req) {
        const { id } = req.params;
        await pool.query('SELECT FROM pedidos where id_pedidos=?', [id]);
    }

    async function Modificar1(req) {
        const { id } = req.params;
        await pool.query('UPDATE pedidos set ? where id_pedidos=?', [req.body, id]);
    }




    return {
        Listar  ,
        Agregar,
        Eliminar,
        Modificar,
        Modificar1,

    }



}