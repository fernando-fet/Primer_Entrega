'use strict'

const Eventos = require('../Models/eventos')

async function Listar(req = null) {
    const Listar = await Eventos().Listar(req)
    return Listar
}


async function tipo_evento(req = null) {
    const eventos = await Eventos().tipo_evento(req)
    return eventos
}

async function eventos(req = null) {
    const eventos = await Eventos().eventos(req)
    return eventos
}
async function Agregar(req = null) {
    const Agregar = await Eventos().Agregar(req)
    return Agregar
}

async function Eliminar(req = null) {
    const Eliminar = await Eventos().Eliminar(req)
    return Eliminar
}

async function Modificar(req = null) {
    const Modificar = await Eventos().Modificar(req)
    return Modificar
}
async function Modificar1(req = null) {
    const Modificar = await Eventos().Modificar1(req)
    return Modificar
}

/////////////////////////////////////// cate

async function Listar2(req = null) {
    const Listar = await Eventos().Listar2(req)
    return Listar
}
async function Agregar2(req = null) {
    const Agregar = await Eventos().Agregar2(req)
    return Agregar
}

async function Eliminar2(req = null) {
    const Eliminar = await Eventos().Eliminar2(req)
    return Eliminar
}

async function Modificar(req = null) {
    const Modificar = await Eventos().Modificar(req)
    return Modificar
}
async function Modificar2(req = null) {
    const Modificar = await Eventos().Modificar2(req)
    return Modificar
}





module.exports = {
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