'use strict'
const pool = require('../database');
module.exports = function() {

    async function Listar(req) {
        let query =`SELECT ev.id_eventos,ev.nombre_evento, ti.eventos,ev.duracion , ev.precio_evento
        FROM eventos ev , tipo_evento ti
        WHERE ev.id_tipo_evento = ti.id_tipo_evento;`;
        const data = await pool.query(query)
        return data
    }

    async function Agregar(req) {
        await pool.query('INSERT INTO eventos set ?', [req.body]);
    }
    async function Eliminar(req) {
        const { id } = req.params;
        await pool.query('DELETE FROM eventos where id_eventos=?', [id]);
    }

    async function Modificar(req) {
        const { id } = req.params;
        await pool.query('SELECT FROM eventos where id_eventos=?', [id]);
    }

    async function Modificar1(req) {
        const { id } = req.params;
        await pool.query('UPDATE eventos  set ? where id_eventos=?', [req.body, id]);
    }

/////////////////////select
    
    async function tipo_evento(req) {
        let query =`SELECT * FROM tipo_evento `;
        const data = await pool.query(query)
        return data
    }
///////////////// 

async function eventos(req) {
    let query =`SELECT * FROM eventos `;
    const data = await pool.query(query)
    return data
}

//////////////////////cate


async function Listar2(req) {
    let query = `SELECT * FROM tipo_evento;`;
    const data = await pool.query(query)
    return data
}
async function Agregar2(req) {
    await pool.query('INSERT INTO tipo_evento set ?', [req.body]);
}
async function Eliminar2(req) {
    const { id } = req.params;
    await pool.query('DELETE FROM tipo_evento where id_tipo_evento=?', [id]);
}

async function Modificar(req) {
    const { id } = req.params;
    await pool.query('SELECT FROM tipo_evento where id_tipo_evento=?', [id]);
}

async function Modificar2(req) {
    const { id } = req.params;
    await pool.query('UPDATE tipo_evento  set ? where id_tipo_evento=?', [req.body, id]);
}



    return {
        Listar,
        Agregar,
        Eliminar,
        Modificar,
        Modificar1,
        eventos,
        tipo_evento,
        Listar2,
        Agregar2,
        Eliminar2,
        Modificar,
        Modificar2,

        

    }



}
