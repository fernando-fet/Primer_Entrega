'use strict'

const Noticias = require('../Models/Noticias')

async function listAll(req = null) {
    const listAll = await Noticias().listAll(req)
    return listAll
}
async function Agregar(req = null) {
    const Agregar = await Noticias().Agregar(req)
    return Agregar
}

async function Eliminar(req = null) {
    const Eliminar = await Noticias().Eliminar(req)
    return Eliminar
}

async function Modificar(req = null) {
    const Modificar = await Noticias().Modificar(req)
    return Modificar
}
async function Modificar1(req = null) {
    const Modificar = await Noticias().Modificar1(req)
    return Modificar
}




module.exports = {
    listAll,
    Agregar,
    Eliminar,
    Modificar,
    Modificar1
    
    
}