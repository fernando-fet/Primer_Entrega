'use strict'

const Reservas = require('../Models/Reservas')

async function Listar1(req = null) {
    const Listar = await Reservas().Listar1(req)
    return Listar
}
async function Agregar(req = null) {
    const Agregar = await Reservas().Agregar(req)
    return Agregar
}

async function Eliminar(req = null) {
    const Eliminar = await Reservas().Eliminar(req)
    return Eliminar
}

async function Modificar(req = null) {
    const Modificar = await Reservas().Modificar(req)
    return Modificar
}
async function Modificar1(req = null) {
    const Modificar = await Reservas().Modificar1(req)
    return Modificar
}




module.exports = {
    Listar1,
    Agregar,
    Eliminar,
    Modificar,
    Modificar1
    
    
}