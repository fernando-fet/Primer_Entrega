'use strict'

const Noticias = require('../Models/login')

async function Listar(req = null) {
    const listAll = await Noticias().Listar(req)
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
////////////////
async function rol(req = null) {
    const rol = await Noticias().rol(req)
    return rol
}
async function Agregar1(req = null) {
    const Agregar = await Noticias().Agregar1(req)
    return Agregar
}

async function Eliminar1(req = null) {
    const Eliminar = await Noticias().Eliminar1(req)
    return Eliminar
}

async function Modificar(req = null) {
    const Modificar = await Noticias().Modificar(req)
    return Modificar
}
async function Modificar2(req = null) {
    const Modificar = await Noticias().Modificar2(req)
    return Modificar
}




module.exports = {
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