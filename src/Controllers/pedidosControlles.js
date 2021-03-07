'use strict'

const Pedidos = require('../Models/Pedidos')

async function Listar(req = null) {
    const Listar = await Pedidos().Listar(req)
    return Listar
}
async function Agregar(req = null) {
    const Agregar = await Pedidos().Agregar(req)
    return Agregar
}

async function Eliminar(req = null) {
    const Eliminar = await Pedidos().Eliminar(req)
    return Eliminar
}

async function Modificar(req = null) {
    const Modificar = await Pedidos().Modificar(req)
    return Modificar
}
async function Modificar1(req = null) {
    const Modificar = await Ventas().Modificar1(req)
    return Modificar
}




module.exports = {
    Listar,
    Agregar,
    Eliminar,
    Modificar,
    Modificar1
    
    
}