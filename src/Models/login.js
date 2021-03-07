
'use strict'
const pool = require('../database');
module.exports = function() {

    async function Listar(req) {
        let query = `SELECT us.id_usuario,us.nombre,us.apellidos,us.email,us.pass,r.rol
        FROM usuarios us , rol r
        WHERE us.id_rol = r.id_rol`;
        const data = await pool.query(query)
        return data
    }


    async function Agregar(req) {
        await pool.query('INSERT INTO usuarios set ?', [req.body]);
    }
    async function Eliminar(req) {
        const { id } = req.params;
        await pool.query('DELETE FROM usuarios where id_usuario=?', [id]);
    }

    async function Modificar(req) {
        const { id } = req.params;
        await pool.query('SELECT FROM usuarios where id_usuario=?', [id]);
    }

    async function Modificar1(req) {
        const { id } = req.params;
        await pool.query('UPDATE usuarios  set ? where id_usuario=?', [req.body, id]);
    }

//////////////////////////////////////////////////////////////////


async function rol(req) {
    let query = `SELECT * FROM rol`;
    const data = await pool.query(query)
    return data
}

async function Agregar1(req) {
    await pool.query('INSERT INTO rol set ?', [req.body]);
}
async function Eliminar1(req) {
    const { id } = req.params;
    await pool.query('DELETE FROM rol where id_rol=?', [id]);
}

async function Modificar(req) {
    const { id } = req.params;
    await pool.query('SELECT FROM rol where id_rol=?', [id]);
}

async function Modificar2(req) {
    const { id } = req.params;
    await pool.query('UPDATE rol  set ? where id_rol=?', [req.body, id]);
}



    return {
        Listar,
        Agregar,
        Eliminar,
        Modificar,
        Modificar1,
        rol,
        Agregar1,
        Eliminar1,
        Modificar,
        Modificar2,
        

    }



}
