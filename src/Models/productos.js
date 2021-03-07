'use strict'
const pool = require('../database');
module.exports = function() {

    async function Listar(req) {
        let query = `SELECT pr.id_productos, pr.nombre_producto ,
        pr.Codigo ,cp.categoria_producto,pr.precio_unitario, pr.total_stock, pr.descripcion,pr.url_img  
        FROM productos pr , categoria_producto cp
        WHERE pr.id_categoria = cp.id_categoria;`;
        const data = await pool.query(query)
        return data
    }

    async function categorias(req) {
        let query = `SELECT * FROM categoria_producto`;
        const data = await pool.query(query)
        return data
    }



    async function Agregar(req) {
        await pool.query('INSERT INTO productos set ?', [req.body]);
    }
    async function Eliminar(req) {
        const { id } = req.params;
        await pool.query('DELETE FROM productos where id_productos=?', [id]);
    }

    async function Modificar(req) {
        const { id } = req.params;
        await pool.query('SELECT FROM productos where id_productos=?', [id]);
    }

    async function Modificar1(req) {
        const { id } = req.params;
        await pool.query('UPDATE productos  set ? where id_productos=?', [req.body, id]);
    }




    return {
        Listar,
        Agregar,
        Eliminar,
        Modificar,
        Modificar1,
        categorias
        

    }



}