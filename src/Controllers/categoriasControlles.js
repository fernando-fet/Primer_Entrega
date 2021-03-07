'use strict'

const Categorias = require('../Models/Categorias')

async function Listar(req = null) {
    const Listar = await Categorias().Listar(req)
    return Listar
}
async function Agregar(req = null) {
    const Agregar = await Categorias().Agregar(req)
    return Agregar
}

async function Eliminar(req = null) {
    const Eliminar = await Categorias().Eliminar(req)
    return Eliminar
}

async function Modificar(req = null) {
    const Modificar = await Categorias().Modificar(req)
    return Modificar
}
async function Modificar1(req = null) {
    const Modificar = await Categorias().Modificar1(req)
    return Modificar
}




module.exports = {
    Listar,
    Agregar,
    Eliminar,
    Modificar,
    Modificar1,
    
}