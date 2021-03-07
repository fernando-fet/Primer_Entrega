'use strict'

const productos = require('../Models/productos')

async function Listar(req = null) {
    const Listar = await productos().Listar(req)
    return Listar
}

async function categorias(req = null) {
    const categorias = await productos().categorias(req)
    return categorias
}
async function Agregar(req = null) {
    const Agregar = await productos().Agregar(req)
    return Agregar
}

async function Eliminar(req = null) {
    const Eliminar = await productos().Eliminar(req)
    return Eliminar
}

async function Modificar(req = null) {
    const Modificar = await productos().Modificar(req)
    return Modificar
}
async function Modificar1(req = null) {
    const Modificar = await productos().Modificar1(req)
    return Modificar
}




module.exports = {
    Listar,
    Agregar,
    Eliminar,
    Modificar,
    Modificar1,
    categorias
    
}