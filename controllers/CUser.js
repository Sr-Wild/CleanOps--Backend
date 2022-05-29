'use strict'
const db = require('../db/db')
const responses = require('../utils/responses')
const MUser = db.usuarios

async function getAllUsers (req, res) {
  try {
    const users = await MUser.findAll({
        order: [['id', 'asc']]
    })
    responses.makeResponsesOkData(res, users, "Success")
  } catch (e) {
    responses.makeResponsesException(res, e)
  }
}

async function getUserById (req, res) {
  try {
    const id = req.params.id
    const user = await MUser.findOne({
        where: { id }
    })
    responses.makeResponsesOkData(res, user, "Success")
  } catch (e) {
    responses.makeResponsesException(res, e)
  }
}

async function createUser (req, res) {
  try {
    const userData = req.body
    const user = await MUser.create({
      cedula: userData.cedula,
      contrasena: userData.contrasena,
      nombre: userData.nombre,
      apellido: userData.apellido,
      correo: userData.correo,
      telefono:  userData.telefono,
      direccion: userData.direccion,
      fechanac: userData.fechanac,
      cargo: userData.cargo,
      disponibilidad: userData.disponibilidad,
      tipo:  userData.tipo,
    })
    responses.makeResponsesOkData(res, user, "Success")
  } catch (e) {
    responses.makeResponsesException(res, e)
  }
}

async function updateUser (req, res) {
  try {
    const id = req.params.id
    const userData = req.body
    const user = await MUser.update({
      cedula: userData.cedula,
      contrasena: userData.contrasena,
      nombre: userData.nombre,
      apellido: userData.apellido,
      correo: userData.correo,
      telefono:  userData.telefono,
      direccion: userData.direccion,
      fechanac: userData.fechanac,
      cargo: userData.cargo,
      disponibilidad: userData.disponibilidad,
      tipo:  userData.tipo,
      created: now()
    },
    {
      where: { id }
    })
    responses.makeResponsesOkData(res, user, "Success")
  } catch (e) {
    responses.makeResponsesException(res, e)
  }
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser
}